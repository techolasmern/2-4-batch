const readlineSync = require("readline-sync");

// const enteredName = readlineSync.question("What is your name? ");

// console.log("Your name is " + enteredName);

const num1 = readlineSync.questionFloat("Enter first number: ");
const num2 = readlineSync.questionFloat("Enter second number: ");

console.log(num1 + num2);