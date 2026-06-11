// Function -> A set of instruction or block of code to perform a specific task.
// re-usable

// function <fnId>() {
    
// }

function displayText(pin, n1, n2, n3) { // parameter
    console.log("The pin that you've entered is: " + pin)
    console.log(n1, n2, n3);
}

// function invoke / calling
displayText(4635, 10, 56, 87); // arguments

// get response from function

function sum(firstNumber, secondNumber, thirdNumber) {
    const result = firstNumber + secondNumber + thirdNumber;
    return result;
}
// console.log(result)
const res = sum(50, 100, 150);

// volume

function getArea(l, b) {
    const area = l * b;
    return area;
}

function getVolume(area, h) {
    const vol = area * h;
    return vol;
}

const ar = getArea(10, 20);
const v = getVolume(ar, 30);
console.log(v);

function sumOfNNumbers(limit) {
    const sum = (limit * (limit + 1)) / 2;
    return sum;
}

const r = sumOfNNumbers(100);
console.log(r);

// const enteredValue = prompt("Enter a value...");
// console.log(enteredValue);

// logical operators

// AND, OR, NOT
// &&, ||, !

// 0, null, undefind, ""
console.log(true && true && false && true); // => false;
console.log(false || false || true || false); // => true;
console.log(!false);