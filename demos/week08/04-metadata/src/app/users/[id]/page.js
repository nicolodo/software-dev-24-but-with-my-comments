// when on a dynaic route like this one, we can't just export an object called 'metadata' - we'll export a function 

// we *must* export a function called 'generateMetadata'
// // generateMetdata is also passed the params and searchParams props
export async function generateMetadata({params}) {
    const {id} = await params
    console.log(id)
    const res = await fetch(`https://dummyjson.com/users/${id}`)

    const userDetails = await res.json()

    // from this function, I must return an object
    return {
        title: `${userDetails.firstName}'s page on Userz!`, 
        description: `Wow this user has given us a lot of details! Don't contact them on ${userDetails.phone}`,
        openGraph: {
            description: `This is a special description for the openGraph protocol! ${userDetails.firstName}'s page is rockin'` 
        }
    }
}



export default async function Page({params}) {

    const {id} = await params
    console.log(id)
    const res = await fetch(`https://dummyjson.com/users/${id}`)

    const userDetails = await res.json()

    console.log(userDetails)
    return (
        <div>
            <h2>{userDetails.firstName} Profile on Userz</h2>
            <p>Works at {userDetails.company.name} as a {userDetails.company.title}</p>
        </div>
    )
}