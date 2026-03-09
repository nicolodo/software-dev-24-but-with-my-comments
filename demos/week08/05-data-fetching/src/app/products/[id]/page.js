export default async function Page({params}) {
    // params will be an object
    // {id: whatevertheIDis}
    const {id} = await params

    const product = await(await fetch(`https://dummyjson.com/products/${id}`)).json()
    // const product = await res.json()

    console.log(product)

    return (
        <div>
            <p>{product.title}</p>
            <p>{product.price}</p>
        </div>
    )
}