import express from "express"
import dotenv from "dotenv"
// A function I wrote, and I have to give it the exact path
import sayHello from "./hello.js"


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

// the server ignores the duplicated one
app.get('/', function (request, response) {
    response.status(200).json('Let this be different')
})


app.get('/photos', async (request, response) => {
    // I'll make a fetch request to unsplash
    const API = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=snow` 
    const data = await fetch(API)
    console.log(data)
    const res = await data.json()

    response.json(res)
})

app.listen(8080, () => {
    console.log("Server running on https://localhost:8080")
})



function sum(a,b) {
    return a + b
}


sum(4,5 )