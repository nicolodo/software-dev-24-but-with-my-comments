import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pg from "pg";

const app = express();
// read env variables
dotenv.config();
// app.use === middleware
// what is middleware?
// middlware is code that runs between the client request and our route handlers
// express.json() says 'read incomming requests to the server (before they hit the route handler) and turn in JS (from JSON)
app.use(express.json());
// Cross Origin Resource Sharing - so our two websites can communicate - sets CORS HEADERS
// What is a header?
// Headers are additional infromation on the request and the response
app.use(cors());

const db = new pg.Pool({
  connectionString: process.env.DB_CONN,
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "You've reached the server" });
});

// ====== GET ALL ANIMALS =======
app.get("/animals", async (req, res) => {
  // so our code will attempt the code in the 'try' block, but if something goes wrong/or an error is thrown, the code in the catch will run
  try {
    // if you forget the extra ()'s it will break.
    const animals = (await db.query(`select * from animals`)).rows;
    res.json(animals);
  } catch {
    res.send(`There was an error`);
  }
});

// ====== GET A SPECIFIC ANIMAL ======
// AND GET A SPECIFIC ANIMAL AND ITS HABITAT
// :id -> route parameter
app.get("/animals/:id", async (req, res) => {
  try {
    console.log(Object.keys(req.query).length);
    // If the object has more than 1 property (so there was a query string)
    // --------- IF THERE IS A QUERY STRING ------------
    if (Object.keys(req.query).length > 0) {
      const animal = await db.query(
        `
        select animals.*, array_agg(
            json_build_object(
                'id', habitats.id,
                'type', habitats.type,
                'description', habitats.description,
                'complexity', habitats.complexity
            )
            ) as habitats
                from animals
                left join animals_habitats 
                on animals.id = animals_habitats.animal_id
                inner join habitats
                on animals_habitats.habitat_id = habitats.id
                where animals.id = $1
                group by animals.id
                `,
        [req.params.id]
      );
      res.status(200).json(animal.rows);
    }
    // how do I read the value of :id?
    // santatise our queries through the dollarsign so no one steals our data

    // ------ NOT A QUERY STRING -------------
    const animal = (
      await db.query(`select * from animals where id = $1`, [req.params.id])
    ).rows;
    // if our database doesn't have an animal that has that id, we send back an error
    if (animal.length < 1) {
      res.status(404).json({ error: "Not Found" });
    }
    res.status(200).json(animal);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

// ====== POST A NEW ANIMAL

app.post("/animals", async (req, res) => {
  try {
    // client POST data throguh the req.body
    // req.body is an object
    const { name, description, scientfic_name, image } = req.body;
    // RETURNING * -> once the DB is finished inserting the data it will return it back to us
    const result = (
      await db.query(
        `insert into animals (name, description, scientfic_name, image) VALUES ($1, $2, $3, $4) RETURNING *`,
        [name, description, scientfic_name, image]
      )
    ).rows;
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete(`/animals/:id`, async (req, res) => {
  try {
    await db.query(`delete from animals where id = $1`, [req.params.id]);
    // 204 - no content
    // i still need to send the response, even if it's nothing
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(8080, () => {
  console.log(`server running on http://localhost:8080/`);
});

// CRUD

// C -> CREATE
// R -> READ
// U -> UPDATE
// D -> DELETE

// req.body -> client sends us information
// req.params -> dynamic route /:id
// req.query -> query strings ?something=somethign
