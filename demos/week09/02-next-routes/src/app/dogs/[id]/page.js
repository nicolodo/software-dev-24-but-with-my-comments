// anything the user adds after /dogs/??? will hit this page
export default async function Page({params}) {

    // route parameters in Next.js are asychronous - so we must 'await' them. 

    // http://localhost:3000/dogs/sam
    // {id: 'sam'}
    const pageParams = await params
    const idOfDog = pageParams.id
    return (
        <>
         <p>The id you're looking at is {idOfDog}</p>
        </>
    )
}

// in Next.js every page.js file gets two props 
// params, searchParams 