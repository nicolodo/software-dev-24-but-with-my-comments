'use client'

// needs to be the first thing in the file
// can only use single or double quotes
// if you import a server component into a client component, that server component (instance) becomes a client one
import {useState} from "react"

export default function Client() {
    const [count, setCount] = useState(0)

    console.log(`Hellooo..... I'm on the client!`)
    return (
        <div>
            I am the client component - you can click on my buttons!
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
}