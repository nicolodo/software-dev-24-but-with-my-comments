console.log('Running...')


const form = document.getElementById('form')

form.addEventListener('submit', async function(event) {
    event.preventDefault()
    // Working with FormData object.
    const data = new FormData(form)
    // turning formData into an object
    const userInput = Object.fromEntries(data)
    console.log(userInput)

    // when we're using fetch our function needs to be async
    // we can give an extra argument to fetch - an object that contains extra config/details
    const result = await fetch(`http://localhost:7070/jokes`, {
      headers : {
        "Content-Type" : "application/json"
      },
      method: "POST",
      body: JSON.stringify(userInput)
    })
})


/*
  {
    joke: 'foo',
    punchline: 'bar'
  }
*/


async  function fetchData() {
  const res = await fetch(`http://localhost:7070`)
  const data = await res.json()

}

fetchData()