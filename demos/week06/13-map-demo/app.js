


// array method -> functions JS gives to interact with arrays
// method is a function that lives on an object

// for Each doesn't return anything
const foo = [1,2,3].forEach((a) => {return a})
console.log(foo)


// .map is very similar to forEach - it returns an array
const bar = [1,2,3].map((a) => {return `<p>${a} is my fav</p>`})
console.log(bar)


const currentIndex = 0;


const images = [{name: 'Sam'}, {name: 'Connor'}]

const output = images.map((image, index) => (
    `<p class=${index}>${image.name}</p>`
))

5 + 5

console.log(output)