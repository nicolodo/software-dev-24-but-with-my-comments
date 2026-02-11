import { useState } from "react"
export default function Image({imgUrl, title, author, loved}) {
    const [showData, setShowData] = useState(false)


    function handleClick() {
        setShowData(!showData)
        console.log(showData)
    }

    if (loved == true) {
        return <p>this image got eaten</p>
    }

    return (
        // WE CANNOT USE IF StateMentS IN OUR RETURN STATEMENT
        <div>
            <img src={imgUrl} alt={title} onClick={handleClick}/>

            {showData == true ? (
            <div>
                <h2>{title}</h2>
                <p>{author}</p>
            </div>
            ) : null 
            }
            {/* add more conditonal rendering */}
            {/* we're going to use && */}
            {/* if loved is false, it wont render the p tag */}
            {/* if loved is true, it will */}
            {/* && returns the right hand operator if the overall expression is true */}
            {loved && <p>This photo is loved</p>}
        </div>
    )
}


// NEW SYNTAX ALERT

// condition ? true : false

// showData ? <p>data</p> : null