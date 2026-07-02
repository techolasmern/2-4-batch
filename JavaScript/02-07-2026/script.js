// promise, async/await

// sync -> line by line execution of code -> blocking
// async -> parallel execution of code -> non-blocking

// 1. CallStack: A Last - In, First - Out(LIFO) data structure that keeps track of the currently executing functions.
// Every time you invoke a function, it is pushed onto the stack.When the function finishes, it is popped off.

// 2. Event Loop: A continuously running guardian mechanism.Its singular job is to monitor the Call Stack.
// If the Call Stack is empty, it checks the queues and pushes pending tasks onto the stack to be executed.

// 3. MicroTask Queue: A high - priority First - In, First - Out(FIFO) queue reserved for critical,
//     immediate asynchronous updates.This queue handles Promise callbacks(.then, .catch, .finally),
// async / await continuations, and APIs like MutationObserver or queueMicrotask().

// 4. Callback Queue / MacroTask Queue: : A lower - priority FIFO queue that stores asynchronous callbacks after
// their background processes finish.This handles tasks from setTimeout(), setInterval(), DOM event listeners,
//     and network I / O operations.

// setTimeout() -> for single time execution ( create a time delay )
// setInterval() -> for repeated execution ( create a time interval )

// setTimeout(() => {
//     console.log("Executed after 5 seconds");
// }, 5000); //time in milliseconds

// const displayTime = () => {
//     const currentTime = new Date();
//     document.body.innerHTML = currentTime.toLocaleString("en-IN").toUpperCase();
// }

// setInterval(displayTime, 1000); //time in milliseconds

// promise -> A way to handle asynchronous operations.
// states of promise -> pending, fulfilled, rejected

const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ message: "promise completed" });
        }, 5000);
    });
}

// How to handle promise;

const promise = myPromise();

console.log(promise);

promise.then((successRes) => {
    console.log("Promise fulfilled:", successRes);
}).catch((errorRes) => {
    console.log("Promise rejected:", errorRes);
}).finally(() => {
    console.log(promise);
    console.log("Promise finally");
})