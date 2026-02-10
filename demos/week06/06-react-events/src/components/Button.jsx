export default function Button() {
    return (
        <div>
            <button onClick={() => {
                console.log('hello')
            }}>Click me!</button>
        </div>
    )
}