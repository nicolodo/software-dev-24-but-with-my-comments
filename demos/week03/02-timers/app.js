function sayHello() {
  console.log("Hello world!");
}

// Both types of timers take 2 arguments: a callback function and a number in milliseconds

// Timeout that runs a named function after 5 seconds
setTimeout(sayHello, 5000);

// Timeout that runs an arrow function after 2 seconds
setTimeout(() => {
  console.log("Cool message!");
}, 2000);

// Interval that runs every 1 second
setInterval(() => {
  console.log("look at me");
}, 1000);

// Named interval so we can use it with clearInterval
const myInterval = setInterval(() => {
  console.log("I'm a message!");
}, 1000);

// This clears the interval instantly, not what we want
clearInterval(myInterval);

// This clears the interval after 5 seconds
setTimeout(() => {
  clearInterval(myInterval);
}, 5000);

// A bomb will go off in 10 seconds!
const bombTimer = setTimeout(() => {
  console.log("BOOM");
}, 10000);

// We can use clearTimeout to clear the timer and defuse the bomb
const defuse = document.getElementById("defuseBtn");
defuse.addEventListener("click", () => {
  clearTimeout(bombTimer);
});

// We can use a setup like this to create a kind of loop through an array
const array = ["a", "b", "c", "d", "e"];
let i = 0;
const arrayInterval = setInterval(() => {
  console.log(array[i]);
  i++;
  if (i >= images.length) {
    clearInterval(arrayInterval);
  }
}, 1000);
