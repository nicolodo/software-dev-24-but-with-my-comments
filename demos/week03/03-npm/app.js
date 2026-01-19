// const cowsay = require("cowsay");
import cowsay from "cowsay";
import chalk from "chalk";

// console.log(cowsay);

console.log(
  cowsay.say({
    text: "I'm a cow and I love to say",
    e: "><",
    T: "U",
  })
);

console.log(
  cowsay.think({
    text: "I'm thinking very hard",
    e: "()()",
    T: "U",
  })
);

console.log(chalk.bgGreen.red("Hello world!"));
