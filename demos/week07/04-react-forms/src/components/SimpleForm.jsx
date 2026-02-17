import { useState } from "react"
// listen for an onChange -> when the user types
// use that onChange to update state
// listen for an onSubmit


export default function SimpleForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event) {
        event.preventDefault()      
        
        console.log(`User submited: ${username} and ${password}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={(e) => {
                    console.log(e.target.value)
                    setUsername(e.target.value)
                }} />

                <label htmlFor="password">password</label>
                <input type="text" id="password" onChange={(e) => {
                    console.log(e.target.value)
                    setPassword(e.target.value)
                }}/>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}