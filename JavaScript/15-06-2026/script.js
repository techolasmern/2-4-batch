// Loop - Repeat a code block/set of instruction until the condition is false;

// for (init; condn; update){
    
// }


// let k = 0;
// k < 10
// k++
// code

for (let i = 0; i < 10; i++){
    console.log(i); // 0, 1, 2, ....9
}
console.log("End of loop!");

// sum of N Number
// prime

// patterns
//           column
//        0  1  2  3  4
// row 0  *  *  *  *  *
// row 1  *  *  *  *  *
// row 2  *  *  *  *  *
// row 3  *  *  *  *  *
// row 4  *  *  *  *  *
// for row => i 
// for column => j

function printFilledSquarePattern(num) {
    const n = 2 * num + 1;
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            if (j == 0 || i == 0 || i == n - 1 || j == n - 1 || i == j || i + j == n - 1) {
                document.writeln("&nbsp;*&nbsp;");
            } else {
                document.writeln("&nbsp;&nbsp;&nbsp;");
            }
        }
        document.writeln("<br>")
    }
}

printFilledSquarePattern(2)

// *
// * *
// * * *
// * * * *
// * * * * *

// *
// * * *
// * * * * *
// * * * * * * *
// * * * * * * * * *

// largest, second largest, palindrome, armstrong number

// string -> collection of char.
// array -> collection of elements

const number = 10;

const str = "Hello"; // index - 0 ( starting with 0)
const studentNames = ["Amal", "Anjana", "Hari", "Kevin"]; // index

console.log(str[0]);
console.log(studentNames[2]);
// 0-9
const numbers = [1, 100, 2, 3, 4, 5, 6, 7, 34, 150, 23, 86, 41, 97, 35, 75, 46, 200, 199];

function getLargestValueFromArray(arr) {
    let largest = arr[0]; // 97
    for (let i = 0; i < arr.length; i++){
        const num = arr[i];
        if (num > largest) {
            largest = num;
        }
    }
    return largest;
}

const lv = getLargestValueFromArray(numbers);
// console.log(lv);

function getSecondLargestValueFromArray(arr) {
    let largest = arr[0];
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num != largest && secondLargest < num) {
            secondLargest = num;
        }
    }
    return secondLargest;
}

const slv = getSecondLargestValueFromArray(numbers);
console.log(slv);

largest = 200;
secondLargest = 150
199 > largest