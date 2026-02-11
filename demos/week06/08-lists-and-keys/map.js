const array = [1,2,3]

const myNumbers = array.map((number) => {
    return number * 2
})

console.log(myNumbers)

// very shorthand
// in arrow functions we can drop the ()'s around the parameter if there is only one param
const myNumber2 = array.map(a => a * 2)