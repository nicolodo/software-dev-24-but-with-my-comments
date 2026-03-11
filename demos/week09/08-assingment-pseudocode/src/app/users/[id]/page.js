import { getUser } from "@/utils/getUser"

export default async function UserPage() {
    const user = await getUser()

    return (
        <div>
            <p>This is the user page</p>
        </div>
    )
}