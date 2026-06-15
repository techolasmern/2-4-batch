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
