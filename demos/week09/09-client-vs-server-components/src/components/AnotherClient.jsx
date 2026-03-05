'use client'
import AnotherServer from "./AnotherServer"

export default function AnotherClient() {
    console.log(`I'm another client component`)
    return (
        <div>
            <p className="m-10">I'm another client component</p>
            {/* The component below, despite being a server component, is running on the client, because it's being imported into a client component */}
            <AnotherServer />
        </div>
    )
}