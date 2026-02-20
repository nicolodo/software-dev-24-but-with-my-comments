import { useState, useEffect } from "react"
import AnimalCard from "../components/AnimalCard"
export default function Animals() {
    const [animals, setAnimals] = useState([])

    console.log(animals)

    useEffect(() => {
        async function fetchData() {
            // fetch() makes a GET request by default
            const res = await fetch(`http://localhost:8080/animals`)
            const data = await res.json()
            setAnimals(data)
        }
        fetchData()
    }, [])
    return (
        <div>
            <h2>All Animals:</h2>

            <div className="flex flex-row flex-wrap gap-10">
                {animals.length > 0 ? animals.map(animal => (
                    <AnimalCard name={animal.name} image={animal.image} id={animal.id} key={animal.id}/>
                )): <p>Loading....</p>}
            </div>
        </div>
    )
}