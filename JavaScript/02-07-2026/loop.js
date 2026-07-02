const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

for (const value of arr) { // for of loop
    console.log(value);  
    // statement
}

// for in loop

const obj = {
    name: "Techolas",
    age: 24,
    city: "Delhi",
    country: "India",
    phone: +919876543210
}

for (const field in obj) {
    if (!obj[field]) {
        console.log(field, "is required");
    }
}