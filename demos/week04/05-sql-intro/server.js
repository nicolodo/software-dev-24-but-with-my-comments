// express set up our server and allows us to create apis
import express from "express"
// cors sets our COR policy so our server can talk to anyone
import cors from "cors"
// dotenv manages importing .env files into our 'process'
import dotenv from "dotenv"
// pg to talk to our database
import pg from "pg"

// set up my app

const app = express()
app.use(cors())
// allows our server to read JSON
app.use(express.json())
// runs config for DOTEVN - this is the line that actually loads our ENV variablse
dotenv.config()

// the new pg.Pool() is a funky looking function that returns an object just like our const app=express line. So now our DB variable has a bunch of methods on it. 
const db = new pg.Pool({
    connectionString: process.env.DB_CONN
})

// Route handler
app.get('/', (request, response) => {
    response.json({"message" : "You're on my root route, how roode!"})
})


app.get('/jokes', async (request, response) => {
    const jokes = await db.query(`SELECT * FROM jokes`)

    console.log(request)

    response.json(jokes.rows)
})

// A route handler for if a client send a post request to our server
app.post('/jokes', async (request, response) => {
    // we need some way to get the data out from what the client has sent to us. 
    console.log(request.body)
    const jokeFromClient = request.body.joke
    const punchlineFromClient = request.body.punchline

    const data = db.query(`INSERT INTO jokes (joke, punchline) VALUES ($1, $2)`, [jokeFromClient, punchlineFromClient])
    response.send('Inserted joke into DB!')
})


app.listen(8080, () => {
    console.log(`Server is alive on http://localhost:8080`)
})