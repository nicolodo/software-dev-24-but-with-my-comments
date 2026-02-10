
// destructuing allows us to extract parts of an object or array

const myObv = {
    myName: 'Sam',
    myCity: 'Liverpool',
    myDog: 'Darcy'
}

console.log(myObv.myName) // Sam


const {myName, myCity, myDog} = {
    myName: 'Sam',
    myCity: 'Liverpool',
    myDog: 'Darcy'
}

console.log(myName) // Sam


// This function will always get an object with a property of a and a property of b.
function takesObject({a, b}) {
    console.log(a)
    console.log(a + b)
}


takesObject({a: 10, b: 14})


takesObject({b: 14})