import Link from "next/link";
import Image from "next/image";
import pg from "pg"
import TextHightlight from "@/components/TextHighlight";

export default async function Page() {
    // setup our connection
    const db = new pg.Pool({connectionString: process.env.DB_CONN})
    console.log(db)

    const responseFromDB = await db.query(`select * from books`)
    const books = responseFromDB.rows
    console.log(books)

    return (
        <div>
            <h2>All books</h2>
            <TextHightlight>
                <div >
                    <h2 className="bg-sky-50">This is an h2</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima sint nulla nostrum maxime est sed? Sed ullam sit eveniet? Odit similique deserunt voluptatum illum iusto, molestiae sequi nam consequuntur vitae.</p>
                </div>
            </TextHightlight>
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