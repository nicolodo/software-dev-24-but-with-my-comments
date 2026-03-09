import pg from "pg"
import Image from "next/image"

export default async function Page({params}) {
    // {id: whatevertheidIS}
    const {id} = await params

    const db = new pg.Pool({connectionString: process.env.DB_CONN})

    const book = await db.query(`select * from books where id = $1`, [id])
    const result = book.rows[0]

    console.log(result)
    return (
        <div className="flex flex-col md:flex-row gap-8">
            <Image src={result.img_url} alt={result.title} height={500} width={400} className="rounded-lg shadow-md" />
            <div className="space-y-4">
                <h1 className="text-3xl font-bold">{result.title}</h1>
                <p className="text-gray-600 text-lg">by {result.author}</p>
                <p className="text-sm text-gray-500">Released: {new Date(result.released).toLocaleDateString()}</p>
                <p className="text-gray-700 leading-relaxed">{result.description}</p>
                <blockquote className="border-l-4 border-yellow-400 pl-4 italic text-gray-600">
                    {result.quote}
                </blockquote>
            </div>
        </div>
    )
}