import Link from "next/link"

// DO NOT PUT THE METADATA IN YOUR FUNCTION / COMPONENT 

export const metadata = {
    title: "See all users on Userz!",
    description: "This is the all users page - you can learn more about these people than you want to know!"
}


export default async function Page() {

    const res = await fetch(`https://dummyjson.com/users`)
    const {users} = await res.json()
    return (
        <div className="flex flex-col">
            {users.map(user => (
                <Link href={`/users/${user.id}`} key={user.id} className="bg-amber-200 text-black p-4 m-2 rounded-2xl ">{user.firstName} | {user.lastName}</Link>
            ))}
        </div>
    )
}