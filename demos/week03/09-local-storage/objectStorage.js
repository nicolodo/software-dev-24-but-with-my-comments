console.log('test')
const colorPicker = document.querySelector('input')



colorPicker.addEventListener('input', function(e) {
    console.log(e.target.value)

    const globalUserColor = hexToRgb(e.target.value)
    console.log(globalUserColor)

    document.body.style.backgroundColor = `rgb(${globalUserColor.r}, ${globalUserColor.g}, ${globalUserColor.b})`

    localStorage.setItem('userColors', JSON.stringify(globalUserColor))

})

// like a very small if statement 
// if globalUserColor has a value, we set colors to be that 
// otherwise, it falls back to the default object
const colors = JSON.parse(localStorage.getItem('userColors')) || {
    r: 15,
    g: 118,
    b: 176
}

console.log('In global scope', colors)
// [object Object] -> we get this back if we try to store an object in localstorage. 
// localStorage.setItem('colors', colors)


// 1. Turn your object into JSON

const colorsJSON = JSON.stringify(colors)

console.log(colors, colorsJSON)

// 2. Save the JSON into local storage

localStorage.setItem('userColors', colorsJSON)

// this is the users fav style


// 3. Get the data from local storage

const fromLocal = localStorage.getItem('userColors')

console.log(fromLocal)

// 4. turn our JSON back into an object
const colorsParsed = JSON.parse(fromLocal)
console.log(colorsParsed)

document.body.style.backgroundColor = `rgb(${colors.r}, ${colors.g}, ${colors.b})`


// I STOLE THIS FROM STACKOVERFLOW.
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }