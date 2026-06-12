// alert("Hello");

// const n1 = parseInt(prompt("Enter number 1:"))
// const n2 = parseInt(prompt("Enter number 2:"))

// const sum = n1 + n2;

// alert("Sum of number: " + sum);

// const number = "10.3"

// console.log(Number(number));

// conditional statement (control statement)

// if, else, else if

// console.log(10 < 20);

// if (10 > 20) {
//     // true statement
//     console.log("10 is less than 20");
// } else {
//     // false statement
//     console.log("10 is not greater than 20");
// }

const num1 = 20;
const num2 = 30;

if (num2 > num1) {
    console.log(num2 + " is greater than " + num1);
} else {
    console.log(num1 + " is greater than " + num2);
}

const n1 = 100;
const n2 = 200;
const n3 = 300;

if (n1 > n2 && n1 > n3) {
    console.log("n1 is greater than n2, n3");
} else if (n2 > n3) {
    console.log("n2 is greater than n1, n3");
} else {
    console.log("n3 is greater than n1, n2");
}

// function getDay(n) {
//     if (n == 1) {
//         return "Sunday";
//     } else if (n == 2) {
//         return "Monday";
//     } else if (n == 3) {
//         return "Tuesday"
//     } else {
//         return "Invalid input";
//     }
// }

function getDay(n) {
    if (n == 1) {
        return "Sunday";
    }
    if (n == 2) {
        return "Monday";
    }
    if (n == 3) {
        return "Tuesday"
    }
    return "Invalid input";
}

const day = getDay(1);
console.log(day);

// calculator

// function add(a, b) {
//     return a + b;
// }

// console.log(add(30, 40));

function calculator(firstNumber, operator, secondNumber) {
    let result;
    if (operator == "+") {
        result = firstNumber + secondNumber;
    }
    if (operator == "-") {
        result = firstNumber - secondNumber;
    }
    if (operator == "*") {
        result = firstNumber * secondNumber;
    }
    // /, %
    return result;
}

const res = calculator(10, "*", 20);
console.log(res);

// Loop -> A loop is a sequence of instructions or actions that repeats automatically
//         until a specific stopping condition is met.

// for loop, while, do while, for in, for of
// for loop

// for (<init>; <condn>; <inc/dec/update>) {
//     // statement for repeat
// }

// print 1 - 10;

for (let data = 1; data <= 10; data++){
    console.log(data) // 0, 1, 2, 3 .... 9
}

// sum of n numbers

function sumOfNNumbers(n) {
    let sum = 0;
    for (let k = 1; k <= n; k++){
        sum = sum + k;
        // 0 + 1 = 1 + 2 = 3 + 3 = 6 + 4 = 10 + 5 = 15.....45 + 10 = 55
    }
    return sum;
}

console.log(sumOfNNumbers(100));

// prime number -> 2 factor -> 1, itself
// 0,1, 2, 3, 5, 7, 11

const num = 20;

// 2 - 10 ->

// 10/5 = 2, 10/10 = 1

function is_prime(num) {
    if (num == 0 || num == 1) return "Not a prime number";
    for (let d = 2; d <= num / 2; d++){
        if (num % d == 0) {
            return "Not a prime number";
        }
    }
    return "Is a prime number";
}

console.log(is_prime(0));