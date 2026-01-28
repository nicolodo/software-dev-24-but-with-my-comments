console.log('Running...')


const form = document.getElementById('form')

form.addEventListener('submit', function(event) {
    event.preventDefault()
    // Working with FormData object.
    const data = new FormData(form)
    // turning formData into an object
    const userInput = Object.fromEntries(data)
    console.log(userInput)
})


/*
  {
    joke: 'foo',
    punchline: 'bar'
  }
*/