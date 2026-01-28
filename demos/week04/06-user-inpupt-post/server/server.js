import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import pg from "pg"

// set up my app object

const app = express()

// configure my application
app.use(cors())
app.use(express.json())
dotenv.config()

// connect to my database

// 'process' refers to Node.js process - the process that is running your application
// give me the .env varaibes of the process
// the DB_CONN versions
const db = new pg.Pool({
    connectionString: process.env.DB_CONN
})

// route handler
app.get('/', (request, response) => {
    response.json({"message": "hello"})
})


app.listen(7070, () => {
    console.log(`The server is alive on http://localhost:7070`)
})