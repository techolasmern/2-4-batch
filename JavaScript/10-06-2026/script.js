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

// Assignment Operator,  Arithmetic, Comparison, Unary Operator

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


// comparison -> ==, ===, !=, !==, <, <=, >, >=

console.log(25 == "25"); // true (only check values)
console.log(25 === "25"); // false (check both value and data type)
console.log(20 != "20"); // false
console.log(20 !== 20); // true

console.log(10 < 20);  // less than
console.log(100 > 20); // greater than
console.log(10 <= 10) // true
console.log(20 >= 20);

// Unary operator

// increment and decrement
// ++, --

// pre & post -> pre-increment, pre-decrement, post-increment, post-decrement
// post => first value will be used. then increment or decrement.
// pre => first increment or decrement the value will be used.

let n1 = 10;
let n2 = 10;
let n5 = 10;
let n6 = 10;

// pre increment
let n3 = ++n1;
console.log(n3, n1);
// pre decrement
let n4 = --n2;
console.log(n4, n2);

// post increment
let n7 = n5++;
console.log(n7, n5);
// post decrement
let n8 = n6--;
console.log(n8, n6);