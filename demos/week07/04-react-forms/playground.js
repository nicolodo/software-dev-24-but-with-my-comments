const myObj = {
    foo: 'Starwars 1',
    bar: 'Space movie'
}
const mySecondobject = myObj
// objects and arrays are passed by reference, not value
mySecondobject.foo = 'Starwars 2'
console.log(myObj)

// SPREAD OPERATOR - lets us make a copy of an object
const movieInfo = {
    title: 'Rango',
    director: 'Gore somethign',
    year: 2011
}

const mySecondMovie = {...movieInfo, year: 2002}
mySecondMovie.title = 'The Ring'
console.log(movieInfo, mySecondMovie)

// Simple data types are passed by value.
let myNumber = 42
let mySecondNumber = myNumber
mySecondNumber = 2
console.log(myNumber)



// Dynamic property names


const foo = 'my_job'

// square brakcets so it reads the value
const myDetails = {
    [foo]: "I'm an instructor"
}

console.log(myDetails)