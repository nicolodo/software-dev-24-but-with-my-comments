import { useParams } from "react-router"
import {useEffect, useState} from "react"

export default function AnimalPage() {
    // I want to read the URL to find out the ID of the animal I'm supposed to be displaying

    const {id} = useParams()
    console.log(id)

    // read this infromation from useParams
    // animals/2
    // animals/5
    // useParams gives us an object of {id: ????} // (whatever value they went to)

    const [animalDetails, setAnimalDetails] = useState(null)

    console.log(animalDetails)

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`http://localhost:8080/animals/${id}`)
            const data = await res.json()
            console.log(data)

            // data is an array of 1 object - so data [0] so it's the first object in that array
            setAnimalDetails(data[0])
        }

        fetchData()
    }, [])

    return (
        <div>
            {animalDetails ? <div>
                <p>{animalDetails.name}</p>
                <p>{animalDetails.scientfic_name}</p>
                <img src={animalDetails.image} alt="" />
            </div> : <p>{`Couldn't find that animal >:(`}</p>}
        </div>
    )
}