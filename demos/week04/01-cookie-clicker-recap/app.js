let state = {
  cookies: 100,
  cps: 1,
  purchases: [],
};

const cookieCountDisplay = document.getElementById("cookieCount");
const cpsDisplay = document.getElementById("cps");
const image = document.querySelector("img");
const shop = document.querySelector("#shop");
const resetButton = document.getElementById("resetGame")

cookieCountDisplay.innerText = state.cookies;

image.addEventListener("click", function () {
  state.cookies++;
  cookieCountDisplay.innerText = state.cookies;
  console.log(state.cookies);
});

// local storage is a requirement!!!
// just for neatness
function game() {
  loadGame()
  setInterval(function () {
    saveGame();
    state.cookies = state.cookies + state.cps;
    cookieCountDisplay.innerText = state.cookies;
    cpsDisplay.innerText = state.cps;
  }, 1000);
}

// last main task is the shop
// https://cookie-upgrade-api.vercel.app/api/upgrades

async function fetchData() {
  const res = await fetch(`https://cookie-upgrade-api.vercel.app/api/upgrades`);
  const data = await res.json();
  // generateShop(data)
  // alternate
  return data;
}

async function generateShop() {
  const items = await fetchData();

  console.log(items);
  items.forEach(function (item) {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("shop-item");

    const itemName = document.createElement("p");
    itemName.innerText = item.name;

    const itemCost = document.createElement("p");
    itemCost.innerText = `Cost: ${item.cost}`;

    const itemIncrease = document.createElement("p");
    itemIncrease.innerText = `CPS: ${item.increase}`;

    const buyButton = document.createElement("button");
    buyButton.classList.add("buy-button");
    buyButton.innerText = "buy";

    buyButton.addEventListener("click", function () {
      purchaseItem(item);
    });

    itemContainer.append(itemName, itemCost, itemIncrease, buyButton);

    shop.append(itemContainer);
  });
}

generateShop();
/* 
{
    "id": 1,
    "name": "Auto-Clicker",
    "cost": 100,
    "increase": 1
}
*/

function purchaseItem(itemParam) {
  // how to tell if the user can purchase something?
  // can the user even afford this?
  // early exit / guard clause
  if (itemParam.cost > state.cookies) {
    alert(`You cant buy that!!!!!!`);
    // I'm using an empty return here - not to return a value but to end the function.
    return;
  }

  state.cookies -= itemParam.cost;
  state.cps += itemParam.increase;
}

function loadGame() {
  console.log(localStorage.getItem("state"));

  if (localStorage.getItem("state") === null) {
    return;
  }
  state = JSON.parse(localStorage.getItem("state"));
}

function saveGame() {
  localStorage.setItem("state", JSON.stringify(state));
}



game()



function resetGame() {
    localStorage.clear()
    state = {
        cookies: 0,
        cps: 1,
        purchases: []
    }
}

resetButton.addEventListener('click', resetGame)