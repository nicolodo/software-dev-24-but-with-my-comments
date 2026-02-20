import AnimalForm from "../components/AnimalForm"
export default function AddAnimalPage() {
    return (
        <div>
            <h2>Add a new animal</h2>

            <p>This is a page about adding a new animal to our databse: you can select from the availabe habitats if you want</p>

            <AnimalForm />
        </div>
    )
}

async function handleSubmit(e) {
    e.preventDefault() 
    const res = await fetch(`http://localhost:YOURNUMER/news`, {
        headers : {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(comment)
    })

    // check db to see if inserted
}