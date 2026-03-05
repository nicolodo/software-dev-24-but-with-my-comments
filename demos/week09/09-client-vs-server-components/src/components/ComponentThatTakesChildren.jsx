'use client'
export default function ComponentThatTakesChildren({children}) {
    console.log(`I'm the component that takes children, and my children still run on the server...`)
    return (
        <div>
            {children}
        </div>
    )
}