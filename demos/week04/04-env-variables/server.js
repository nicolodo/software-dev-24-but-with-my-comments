import express from "express"
import dotenv from "dotenv"


// 2 Instansiate our express app.

const app = express()

// setup DOTENV so it pulls in my environemnt from the .env file into node process
dotenv.config()

console.log(process.env.MY_NAME)
console.log(process.env.MY_PET)

// 3. Set up a route handler

app.get('/', (request, response) => {
    // . status lets you be specifc abotu what response code to send back to the client
    // eg 404, 418, 200, ect.
    response.status(203).json('Looking at my root route')
})

// app.get('/', function (request, response) {
//     response.status(200).json('Looking at my root route')
// })


app.get('/photos', async (request, response) => {
    // I'll make a fetch request to unsplash
    const data = await fetch(`https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=puppy`)
    const res = await data.json()

    response.json(res)
})


app.listen(8080, () => {
    console.log("Server running on https://localhost:8080")
})