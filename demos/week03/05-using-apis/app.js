console.log('Running...')

const img = document.querySelector('img')


// synchornous -> happening at the same time
// asynchornous -> not happening at the same time

// Async functions

// Whenever we fetch data it must happen inside an async function

async function fetchData() {
    // there is an inbuilt JS function called fetch()
    // fetch - fetches! - we can use it to make a request to a website in our own code1
    // fetch on its own only fetches 'headers'
    const response = await fetch(`https://randomfox.ca/floof/`)
    console.log(response)

    // now we tell our program how to read the data we got from fetch

    const data = await response.json()
    
    console.log(data)

    // fetch gets the data
    // .json() reads the data
    // and now we have that object in our own code and can use it as we like.

    img.src = data.image
}

fetchData()