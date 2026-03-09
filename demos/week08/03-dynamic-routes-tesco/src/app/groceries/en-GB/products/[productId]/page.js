import { findProductById } from "@/store"

export default async function Page({params}) {

    const pageParams = await params

    console.log(pageParams)

    // find the product in our list of all products and returns in - we store that object in 'product'
    const product = findProductById(Number(pageParams.productId))

    console.log(product)
    return (
        <div>
            This is the page for individual products

            <div>
                <h2>{product.name}</h2>
                <ul>
                    <li>{product.category}</li>
                    <li>{product.price}</li>
                    <li>{product.inStock}</li>
                </ul>
            </div>
        </div>
    )
}


// next.js has 'named' file types -> page.js 
// all page.js files get a prop
// that prop is an object 
// with two properties -> params, searchParams
// the params prop will tell us the value of the dynamic route parameter
// what is the productId?
// in next.js these are async. 