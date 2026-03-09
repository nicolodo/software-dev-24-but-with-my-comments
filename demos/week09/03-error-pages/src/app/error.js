"use client"

// error object -> which has a .message property so you can display the error message to your end user
export default function Error({error, reset}) {
    return (
        <div>
            <p>Somethign went wrong :(</p>
            <p>{error.message}</p>
            <button onClick={() => reset()}>Try again. Might not work!</button>
        </div>
    )
}