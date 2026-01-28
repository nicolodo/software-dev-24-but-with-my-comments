import express from "express"
import pg from "pg"
import cors from "cors"
import dotenv from "dotenv"

const app = express()

// without this line, my express server cannot parse JSON. It's a translator.
app.use(express.json())
app.use(express.text())
app.use(cors())
dotenv.config()

// Set up a route handler -> for when a GET request comes in to /
app.get('/', (request, response) => { 
    response.send('Hello!')
})

// set up a route handler -> for when a GET request comes into /jokes
app.get('/bees', (req, res) => {
    res.json(bees)
})

// set up a route handler -> for when a POST request comes into /jokes
// POST exsits for client to send over information with the request
// Sending JSON in the body of the request.
app.post('/jokes', (req, res) => {

    // my req object contains infromation from the client: Headers, Body, Params, Query strings

    console.log(req.body)
    res.status(200).json({message: req.body})
})


app.listen(4242, () => {
    console.log(`Started listening for requests made to http://localhost:4242`)
})




// how do I make this variable available in a different file?
// we need to tell the variable it can be exported 
export const bees = [
    {
      id: 1,
      commonName: "Western honey bee",
      scientificName: "Apis mellifera",
      fact: "Forms large colonies; produces honey and wax.",
      habitat: "Gardens, meadows, orchards",
      imgSrc: "https://cdn.britannica.com/02/193702-050-860339C5/worker-bee-honeybee.jpg"
    },
    {
      id: 2,
      commonName: "Buff-tailed bumblebee",
      scientificName: "Bombus terrestris",
      fact: "Capable of buzz pollination (e.g., tomatoes).",
      habitat: "Hedgerows, fields, urban parks",
      imgSrc: "https://www.gedlingconservationtrust.org/wp-content/uploads/2018/05/bombus-terrestris.jpg"
    },
    {
      id: 3,
      commonName: "Red mason bee",
      scientificName: "Osmia bicornis",
      fact: "Solitary; nests in hollow stems and bee hotels.",
      habitat: "Woodland edges, gardens",
      imgSrc: "https://warehouse1.indicia.org.uk/upload/13/19/05/p16cf12u741vg14m41ger16f91sv34.jpg"
    }
  ]



// const sum = (afsdfsdf, sunflower) => {
//     console.log(sunflower)
// }


// // some villian (.get())
// sum('hahaha funny extra argument', 10)