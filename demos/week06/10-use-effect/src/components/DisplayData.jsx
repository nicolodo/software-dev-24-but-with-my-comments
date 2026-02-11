import {useState, useEffect} from "react"

export default function DisplayData() {
    const [users, setUsers] = useState([])
    // console.log('Running display data...')

    useEffect(() => {
        // the cbf itself to the useEffect cannot be async 
        // but we must use an async function to fetch data
        // so we delcare a function inside the use effect/

        async function fetchData() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
            const data = await response.json()
            // console.log('Running fetch..')
            setUsers(data)
        }
        fetchData()
        
    }, [])

    // console.log(users)
    return (
        <div>
            {users.length > 0 ? users.map((user) => (
                <p>{user.username}</p>
            )) : ''}
        </div>
    )
}