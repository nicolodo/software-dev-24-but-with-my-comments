import { getUser } from "@/utils/getUser"

export default async function UserPage() {

    // this will always read the currently looged in user
    // could we read from params to get other user profiles? 
    const user = await getUser()

    console.log(user[0])
    return (
        <div>
            <p>This is the user page</p>
            <p>{user[0].username}</p>
            <p>bio: </p>
            <p>{user[0].bio}</p>
        </div>
    )
}