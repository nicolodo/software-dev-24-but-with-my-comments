import { useSearchParams } from "react-router"

export default function Plain() {
    const [params, setSearchParams] = useSearchParams()

    // useSearchParms allows to read search param values from the URL 
    // http://localhost:5173/?sortBy=asc 
    // eg -> what is sortBy set to?

    console.log(params.get('sortBy'))


    // setSearchParams allows you to manually set your search params - you give it an object with key: value pairs
    // setSearchParams({cat: 'fluffy'})
    // dont call setSearchParams on its own - should be tied to an events
    return (
        <div>
            <p>Query strings</p>
        </div>
    )
}