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

let isPasswordCorrect = false;
do {
    const res = prompt("Enter password");
    if (res == "123") {
        break;
    }
} while (!isPasswordCorrect);
