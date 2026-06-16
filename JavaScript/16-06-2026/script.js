// while

// Entry controlled loop
let i = 0; // init
while (i < 0) { // condn
    console.log(i); // statement
    document.writeln(i);
    i++; // updation
}
console.log("End of loop");

//  do while
// Exit controlled loop

let k = 0; // init
do {
    console.log(k); // statements
    console.log("Executed atleast one time"); // statements
    k++; // updation
} while (k < 0); // condition
console.log("End of loop");

// let isPasswordCorrect = false;
// do {
//     const res = prompt("Enter password");
//     if (res == "123") {
//         break;
//     }
// } while (!isPasswordCorrect);

function isPalindrome(number) {
    let temp = number;
    let rev = 0;
    for (temp; temp > 0; temp = parseInt(temp / 10)) {
        const rem = temp % 10;
        rev = rev * 10 + rem;
    }
    return rev == number;
}

function checkIsPalindrome(number) {
    let temp = number;
    let rev = 0;
    while (temp > 0) {
        const rem = temp % 10;
        rev = rev * 10 + rem;
        temp = parseInt(temp / 10);
    }
    return rev == number;
}

console.log(checkIsPalindrome(12121))

// armstrong number = 153

function getNumberLength(num = 0) {
    // -----------------------------------------
    // first method
    // const str = num.toString();
    // return str.length;
    // --------------------------------------
    let digits = 0;
    while (num > 0) {
        num = parseInt(num / 10); // 1/10 = 0
        digits++ // +3
    }
    return digits;
}

// 153

function is_armstrong(num) {
    const pow = getNumberLength(num);
    let sum = 0;
    let temp = num;
    while (num > 0) {
        const rem = num % 10;
        sum += rem ** pow;
        num = parseInt(num / 10);
    }
    return sum == temp;
}

console.log(is_armstrong(153));

// value swap
let a = 10;
let b = 20;

let temp = a;
a = b;
b = temp;

console.log(a, b);

// sorting

const arr = [5, 2, 7, 4, 8, 1, 9, 0, 3, 6];

function sort(arr=[]) {
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[i]) {
                const temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

console.log(sort(arr));