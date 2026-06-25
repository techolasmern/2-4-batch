// const runLoop = (arr = [], callback) => {
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         callback(element, i, arr);
//     }
// }

// runLoop([40, 37, 86, 17, 92, 30, 63, 76], (element, index, array) => {
//     console.log("Element:", element, "Index:", index, "Array:", array);
// });

// Array methods -> ForEach, Filter, Map, Find, some, every, reduce

const arr = [10, 40, 20, 70, 81, 30, 60];

arr.forEach((element, index, array) => {
    console.log("Element:", element, "Index:", index, "Array:", array);
}); // just array looping

// filter
// const resArray = arr.filter((element, index, array) => {
//     if (element % 3 == 0) {
//         return true;
//     }
// })

// const resArray = arr.filter((element, index, array) => {
//     return element % 3 == 0;
// })

const resArray = arr.filter(val => val % 3 == 0);
console.log(resArray);

// map -> update or manipulate array.
// returns an array - response array length === input array length

// const responseArr = arr.map((element, index, array) => {
//     if (element % 3 == 0) {
//         return "D by 3";
//     }
//     return element;
// })
// const responseArr = arr.map((element) => {
//     // if (element % 3 == 0) {
//     //     return "D by 3";
//     // }
//     // return element;
//     return element % 3 == 0 ? "D by 3" : element;
// })
const responseArr = arr.map((val) => val % 3 == 0 ? "D by 3" : val);
console.log(responseArr);

// Filter all even numbers from an array.
// Replace each number in the array with its square.
// Replace every even number in the array with half of its value.

// find, some, every, reduce

// find
const responseData = arr.find((element) => element % 3 == 0);
console.log(responseData);

// some
const bool = arr.some((element) => element % 81 == 0);
console.log(bool);

// every
const boolRes = arr.every((element) => element % 1 == 0);
console.log(boolRes);

// const arr = [10, 40, 20, 70, 81, 30, 60];

// reduce -> returns a single value
const redRes = arr.reduce((sum, cv) => sum * cv, 1);
console.log(redRes);

// let sum = 0;
// sum += currentElement
// return sum;