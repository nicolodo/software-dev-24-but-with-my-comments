let cookieCount = 0;
let cps = 1;

const cookieCountDisplay = document.getElementById("cookieCount");
const cpsDisplay = document.getElementById("cps");
const image = document.querySelector("img");


cookieCountDisplay.innerText = cookieCount

image.addEventListener("click", function () {
  cookieCount++;
  cookieCountDisplay.innerText = cookieCount
  console.log(cookieCount);
});


// local storage is a requirement!!!

setInterval(function() {
    cookieCount++
    cookieCountDisplay.innerText = cookieCount
}, 1000)


// last main task is the shop
// https://cookie-upgrade-api.vercel.app/api/upgrades

async function fetchData() {
    // await fetch
    // await something.json()


    // our upgrades will be an array of objects

    // so loop through the array. can use forEach or a normal loop. 
        // use document.create elemtn to create each of my tags 
        // each item also needs a 'buy' buttom
        // append to the dom 

        // to our buy buttons, event listner
        // check if the user can afford to buy the item
        // if we can afford it 
            // update the cps and add the 'increase' amount ot it 
            // take away the cost of the upgrade from your overall cookie count
        // if you cant afford it
            // do an alert and end the function
            // look into 'toast' notifications if you wanna be fancy
}