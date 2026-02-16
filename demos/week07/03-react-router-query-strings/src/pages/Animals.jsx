import { useSearchParams, Link } from "react-router";
export default function Animals() {
    const [params, setSearchParams] = useSearchParams()

    const animals = [
        "Pigeon",
        "Frog",
        "Cat",
        "Honeybadger",
        "Monkey",
        "Panda",
        "Elephant",
        "Dog",
        "Lion",
        "Tiger",
        "Eagle",
        "Guinea Pig",
        "Possum",
      ];


    //   console.log(params.get('sortBy'))

    if (params.get('sortBy') === 'asc') {
        animals.sort()
    } else if (params.get('sortBy') === 'desc') {
        animals.sort().reverse()
    }

    return (
        <div>
            <select onChange={(event) => setSearchParams({sortBy: event.target.value})}>
                <option value="asc"> asc </option>
                <option value="desc"> desc </option>
                <option value="">Don't sort</option>
            </select>

            {/* easier version: we don't need both the above and this one */}
            <nav>
                <Link to='/animals?sortBy=asc'>Asc</Link>
                <Link to='/animals?sortBy=desc'>Desc</Link>
                <Link to='/animals'>Dont sort</Link>
            </nav>
            <ul>
                {animals.map(animal => (
                    <li key={animal}>{animal}</li>
                ))}
            </ul>
        </div>
    )
}