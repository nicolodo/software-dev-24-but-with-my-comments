import Link from "next/link";
import Image from "next/image";
import pg from "pg"

export default async function Page() {
    // setup our connection
    const db = new pg.Pool({connectionString: process.env.DB_CONN})

    const responseFromDB = await db.query(`select * from books`)
    const books = responseFromDB.rows
    console.log(books)

    return (
        <div>
            <h2>All books</h2>
            <div className="flex flex-wrap flex-row gap-2">
                {books.map(book => (
                    <Link href={`/books/${book.id}`} key={book.id}>
                        <Image src={book.img_url} alt="" height={500} width={400} />
                    </Link>    
                ))}
            </div>
        </div>
    )
}