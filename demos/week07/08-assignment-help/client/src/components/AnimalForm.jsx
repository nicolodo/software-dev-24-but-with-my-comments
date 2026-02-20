import {useState, useEffect} from "react"

export default function AnimalForm() {
    const [habitats, setHabitats] = useState([])
    const [selectedHabitat, setSelectedHabitat] = useState('')
    const [formData, setFormData] = useState('')

    console.log(selectedHabitat)
    // console.log(habitats)
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`http://localhost:8080/habitats`)
            // const data = await res.json()
            setHabitats((await res.json()))
        }

        fetchData()
    }, []) 

    function handleChange(e) {  
        setFormData({...formData, [e.target.name] : e.target.value})
        console.log(formData)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(formData, selectedHabitat)
        // 1. create our animal -> need to do this first 
        const animalRes = await fetch(`http://localhost:8080/animals`, {
            method: "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })

        const newAnimal = await animalRes.json()
        console.log(newAnimal[0])

        // 2. need to update the animals_habitats side

        await fetch(`http://localhost:8080/animals/${newAnimal[0].id}/habitats/${selectedHabitat}`, {
            // the actual content of the request is in the URL params - so we dont have a body. The end result is still making a new resource, so this should still be a post route
            method: "POST"
        })

    }

    return (
        <form className="flex flex-col justify-center items-center gap-2 bg-amber-200 p-5 max-w-[50vw]" onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <input name="name" onChange={handleChange} required className="bg-white text-black"/>
            <label htmlFor="">description</label>
            <input name="description" onChange={handleChange} required className="bg-white text-black"/>
            <label htmlFor=""> scientfic_name</label>
            <input name=" scientfic_name" onChange={handleChange} required className="bg-white text-black"/>
            <label htmlFor="">image (url)</label>
            <input name="image" onChange={handleChange} required className="bg-white text-black" />

            {/* force user to select an option from dropdown? */}
            <select required className="w-24 bg-white" onChange={(e) => setSelectedHabitat(Number(e.target.value))}>
                <option value="">Please select</option>
                {habitats.map(habitat => (
                    <option key={habitat.id} value={habitat.id}>
                        {habitat.type}
                    </option>
                ))}
            </select>
            <button type="submit" className="border-4 w-[200px]">Submit new animal</button>
        </form>
    )
}