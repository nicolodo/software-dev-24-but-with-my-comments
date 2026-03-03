import Link from "next/link"
import Image from "next/image"

export default async function Page({searchParams}) {
    const res = await fetch(`https://dummyjson.com/products`)
    const data = await res.json()
    const products = data.products


    // read our search Params

    const params = await searchParams
    console.log(params)

    if (params.sortBy === 'desc') {
        products.reverse()
    }

    return (
        <div>
            <p>All products page</p>    
            <div>
                <Link href='/products'>Dont sort</Link>
                <Link href="/products?sortBy=desc">Reverse</Link>
            </div>

            {products.map(product => (
                <Link href={`/products/${product.id}`} key={product.id}>
                    <Image height={400} width={500} src={product.images[0]} alt="" ></Image>
                </Link>
            ))}
        </div>
    )
}

// https://localhost:3000/proudcts 
// https://localhost:3000/proudcts?sortBy=desc

