type userDetailsType = {
    name: string,
    age: number,
    city: string
}


export default function UserDisplayCard({name, age, city}: userDetailsType) {
    return (
        <div className="bg-amber-400 m-10">
            <p>{name}</p>
            <p>{age}</p>
            <p>{city}</p>
        </div>
    )
}