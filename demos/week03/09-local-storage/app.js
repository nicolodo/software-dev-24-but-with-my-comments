console.log('Set up completed!')


// 1. select both elements so I can use them

const button = document.querySelector('button')
const display = document.querySelector('p')

// if localstage.getItme is null, it will return 0 instead
let count = Number(localStorage.getItem('count')) || 0
console.log(count)
display.innerText = count

button.addEventListener('click', function() {
    count++
    display.innerText = count

    // storing the count in local storage
    localStorage.setItem('count', count)
})