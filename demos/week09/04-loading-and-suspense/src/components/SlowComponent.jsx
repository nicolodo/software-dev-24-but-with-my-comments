
// takes 5 seconds to do nothing at all
async function delay() {
    return new Promise((resolve) => {
        setTimeout(resolve, 5000)
    })
}

export async function SlowComponent() {
    await delay()
    return (
        <p>I am very slow, but here I am at last! 🐢</p>
    )
}