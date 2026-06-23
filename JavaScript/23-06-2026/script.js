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

const inputNumber = (data, callback) => {
    callback(data);
}

const number = 10;

inputNumber(number, display);

// sum

const displaySum = (sum) => {
    console.log(sum);
}

const calculateSum = (a, b, callback) => {
    const sum = a + b;
    callback(sum);
}

calculateSum(10, 20, displaySum);
calculateSum(20, 40, displaySum);

// calculateSum -> Higher order function
// displaySum -> First order function

// area, volume, display

const finalDisplay = (value) => {
    console.log(value);
}

const getVolume = (area, h, displayCallback) => {
    const volume = area * h;
    displayCallback(volume);
}

const getArea = (l, b, volumeCallback, displayCallback) => {
    const area = l * b;
    volumeCallback(area, 20, displayCallback);
}

getArea(10, 20, getVolume, finalDisplay);

// Loop

const runLoop = (arr = [], callback) => {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        callback(element, i, arr);
    }
}

runLoop([40, 37, 86, 17, 92, 30, 63, 76], (element, index, array) => {
    console.log("Element:", element, "Index:", index, "Array:", array);
});

// array methods -> forEach, map, filter, find, reduce, some, every