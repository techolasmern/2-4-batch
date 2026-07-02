console.log("A"); // Directly from callstack

setTimeout(() => { 
    console.log("B")
}, 0); // Callback Queue / MacroTask Queue

Promise.resolve("C").then(successRes => {
    console.log(successRes);
}).catch(errorRes => {
    console.log(errorRes);
}); // MicroTask Queue

console.log("D"); // Directly from callstack



