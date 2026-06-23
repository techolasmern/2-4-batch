// Callback Functions -> A function is passed as an argument to another function.

// Anonymous function -> function without an identifier.
// function sum() {
    
// }
// () => {

// }

// IIFE - immediately invoked function expression.

// sync, async
// blocking, non-blocking

// (async () => {
//     console.log("Function invoked");
// })();


const display = (value) => {
    console.log(value);
} 

// const sampleFunc = display;

const inputNumber = (data, Callback) => {
    Callback(data);
}

const number = 10;

inputNumber(number, display);