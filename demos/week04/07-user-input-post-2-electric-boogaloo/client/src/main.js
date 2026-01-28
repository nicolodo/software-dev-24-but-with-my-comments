console.log('first')


// get our form
const form = document.getElementById('form')

async function handleSubmit(e) {
  // stop defualt behaviour - which is the form resubmited. 
  e.preventDefault()
  console.log('Submitted the form')

  // horrible line of code - to get the FormData object
  const data = new FormData(form)
  // turn that data into a regular JS object
  const userInput = Object.fromEntries(data)
  
  // prepare the data to be sent over the internet 
  // so we'll turn it into JSON 
  const userInputJSON = JSON.stringify(userInput)
  console.log(userInput, userInputJSON)


  // fetch by default makes a get request, but give a second argument.
  const foo = await fetch(`http://localhost:4242/jokes`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: userInputJSON
  })
  const res = await foo.json()
  console.log(res)
}

// when the user submits the form, run the handleSubmit function
// addEventListenr passes in the arguments - that not our job. So *it* passes in the 'Event Object' 
form.addEventListener('submit', handleSubmit)