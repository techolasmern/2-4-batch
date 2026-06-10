// variable declaration

// var a;
// let b;
// const b;

var a = 25;
console.log(a);
var a = 30;
console.log(a);
a = 45;
console.log(a);
// var -> re-declare is allowed & re-assign is allowed

let b = 35;
console.log(b);
b = 40;
console.log(b);
// var -> re-declare is not allowed & re-assign is allowed

const pi = 3.14;
// const -> re-declare is not allowed & re-assign is not allowed

// Operators

// Assignment Operator,  Arithmatic, Comparison, Unary Operator

let num = 12;
// +=, -=, *=, /=

// +, -, *, /, %, **

console.log('--------------------------------------------------')

console.log(1 + 1);
console.log("1" + "1");
console.log("1" + 1);
console.log(1 + "1");

// console.log(1 + +1); 
console.log(1 + +"1"); 

console.log(10 - 5);
console.log("10" - 5)

console.log(10 * 2)
console.log(10 / 2)
console.log(10 ** 3)
console.log(10 % 4);

let num1 = 10;
let num2 = 20;

num1 = num1 + num2; // a = a + b -> a += b;
num1 = num1 - num2; // a = a - b -> a -= b;
num1 = num1 * num2; // a = a * b -> a *= b;
num1 = num1 / num2; // a = a / b -> a /= b;

console.log(num1);
