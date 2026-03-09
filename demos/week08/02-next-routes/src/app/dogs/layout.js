// we must export a function called 'Layout'

export default function Layout({children}) {
    return (
        <div>
            <h2>I'm from /dogs/layout.js</h2>
            {children}
        </div>
    )
}