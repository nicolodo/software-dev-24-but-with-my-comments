import pg from "pg"

export default async function Page({params}) {
    // {id: whatevertheidIS}
    const {id} = await params

    const db = new pg.Pool({connectionString: process.env.DB_CONN})

    const book = await db.query(`select * from books where id = $1`, [id])
    const result = book.rows[0]

    console.log(result)
    return (
        <div>
            <p>{book.title}</p>
            <p>{book.author}</p>
        </div>
    )
}