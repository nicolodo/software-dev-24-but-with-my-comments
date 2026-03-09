import { notFound } from "next/navigation"
import pg from "pg"

export default async function Page({params}) {
    // {id: whatevertheidIS}
    const {id} = await params

    const db = new pg.Pool({connectionString: process.env.DB_CONN})

    const book = await db.query(`select * from books where id = $1`, [id])
    const result = book.rows[0]

    // if result is null
    if (!result) {
        notFound()
    }

    console.log(result)
    return (
        <div>
            <p>{result.title}</p>
            <p>{result.author}</p>
        </div>
    )
}