import UserDisplayCard from "@/components/UserDisplayCard"

type pageParams = {
    params: {
        id: string
    }
}

export default async function Page({params}: pageParams) {
    const {id} = await params
    return (
        <div>
            <UserDisplayCard name={'Sam'} age={42} city="liverpool" />
            <p>{id}</p>
        </div>
    )

}


// export default async function Page({params}: {params: {id: string}}) {
//     const {id} = await params
//     return (
//         <div></div>
//     )
// }

// All page.js files in next.js are passed an object as an argument

// {
//     params: {id: 2},
//     searchParams: {sortBy: 'asc'}
// }