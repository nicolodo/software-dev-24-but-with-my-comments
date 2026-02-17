import {useState, useEffect} from "react"
export default function Polling() {
    const [img, setImg] = useState({})

    console.log(img)
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://randomfox.ca/floof/`)
            const data = await res.json()
            setImg(data)
        }

        const interval = setInterval(fetchData, 3000)

        // if we don't return a cleanup function from our useEffect cbf, DEV mode runes the effect twice, so we would have two intervals running at the same time
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            <img src={img.image} />
        </div>
    )
}