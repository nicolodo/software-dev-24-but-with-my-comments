import { useState } from "react";


export default function Counter({dislikes, setDislikes}) {
    // use state takes what you want the intial value to be 
    // returns an array
    // we are 'destructuring the array' here.
    const [count, setCount] = useState(0)

    // your state variable
    // a function to update that variable
    // const stuff = useState(0)
    // console.log(stuff)

    // let count = stuff[0];
    // let setCount = stuff[1]
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => {
                // we *MUST* use the 'updator funciton' to update our state variables
                setCount(count + 1)

            }}>Click me!</button>

            <h2>Dislikes:</h2>
            <p>{dislikes}</p>
            <button onClick={() => {setDislikes(dislikes + 1)}}>I hate this!</button>
        </div>
    )
}