'use client'

import { useState } from "react"

export const ButtonBetter = () => {
    const [clicks, setClicks] = useState(0)

    // to 'type' event objects!
    // React.typeofEvent<HTML_name_of_element>

    function handleClick(e: React.MouseEvent<HTMLButtonElement> | React.InputEvent<HTMLInputElement>) {
        console.log(e)
    }

    return (
        <button onClick={handleClick}>{clicks}</button>
    )
}

// React.ChangeEvent<HTMLInputElement>