// Arrow, Ternary, Switch

// arrow function -> shorthand of function;
// function sum(a, b) {
//     return a + b;
// }

// const sum = (a, b) => a + b;
const sum = a => a + 10;

const result = sum(20);
console.log(result);

// Ternary operator -> shorthand of conditional operators

// syntax -> <condition> ? <statement if the condition is true> : <statement if the condition false>;

// false ? console.log("block 1") : console.log("block 2");

const a = 100;
const b = 20;

a > b ? console.log("a is greater than b") : console.log("b is greater than a");

// assigning a value;

const isBot = true;
let res = isBot ? "Bot" : "Human";
console.log(res);

// if (isBot) {
//     res = "Bot"
// } else {
//     res = "Human"
// }
// console.log(res);

// Switch -> condition

switch (2) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log("Invalid input");
}

const getDay = (d) => {
    switch (d) {
        case 1:
            return "Sunday"; 
        case 2:
            return "Monday";
        // complete case 3 - 7
        default:
            return "Invalid input";
    }
}

console.log(getDay(3));

// odd or even

const getNumberIsOddOrEven = (number) => {
    switch (number % 2) {
        case 0:
            return "Even"
        case 1:
            return "Odd"
    }
}

console.log(getNumberIsOddOrEven(11))
