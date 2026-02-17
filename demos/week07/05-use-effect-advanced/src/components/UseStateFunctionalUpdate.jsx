import { useState } from "react"

export default function UseStateFunctionalUpdate() {
    const [counter, setCounter] = useState(0)

    function handleClick() {

        // React tries to 'batch' state updates - so counter is still 0 on each of these and we only go up by one
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter + 1)

        // === Functional Updates
        // Force react to give us the new value of state (run the function) before it does the next state update

        // When do we use this?
        // if doing multiple state updates to the same value (rare)
        // if your code might be suffering from 'closure' -> we'll see this when doing our setInterval

        setCounter((asdfs) => asdfs + 1)
        setCounter((prevState) => prevState + 1)
        setCounter((prevState) => prevState + 1)

        console.log(counter)
    }


    return (
        <div>
            <button onClick={handleClick}>Click</button>
            <p>{counter}</p>
        </div>
    )
}