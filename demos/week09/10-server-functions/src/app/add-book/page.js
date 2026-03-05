import pg from "pg"
import { redirect } from "next/navigation"


export default function Page() {

    // server function
    // they *must* be async
    // they must have "use server" as the first

    async function handleSubmit(formData) {
        "use server"
        console.log(`I'm a console log`)
        // any function passed as an action to a form automatically gets FormData - so don't need to make it

        // turn our FormData into a regular object
        const {title, author, description, quote, released, image_url} = Object.fromEntries(formData)
        // console.log(data)

        const db = new pg.Pool({connectionString: process.env.DB_CONN})
        const newBook = db.query(`insert into books (title, author, description, quote, img_url, released) VALUES ($1, $2, $3, $4, $5, $6)`, [title, author, description, quote, image_url, released])

        redirect(`/books`)
    }

    return (
        <div>
            <h2>Add a new book</h2>
            <form action={handleSubmit}>
                <input name="title" />
                <input type="text" name="author" id="" placeholder="author"/>
                <input name="description" placeholder="description"/>
                <input type="text" name="quote" id="" placeholder="quote" />
                <input type="date" name="released" />
                <input type="text" name="image_url" id="" placeholder="image url"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}