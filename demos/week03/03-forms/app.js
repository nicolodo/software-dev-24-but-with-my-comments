console.log('hello')


const form = document.querySelector('form')


// Manual approach
form.addEventListener('submit', function(event) {
    // if you dont add the below line, your forms wont work
    event.preventDefault()
    console.log(event)

    // We can use the event object to read the data from our inputs

    // this works - we are just trailing down the event object
    console.dir(event.target[0].value)
    // you can use the 'name' attribute in your dot notation to select a specific input
    console.log(event.target.passWORD.value)
})


// COOL form data approach
function handleSubmit(event) {
    event.preventDefault()

    const data = new FormData(form)
    console.log(data)

    // turn our formData into a real object
    const userData = Object.fromEntries(data)

    console.log(userData)
}

form.addEventListener('submit', handleSubmit)









// document.querySelector('p').addEventListener('click', function(e) {
//     console.log('Clicked on the ptag')
//     console.log(e)
// })