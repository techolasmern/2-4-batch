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

// console.log(promise);

// promise.then((successRes) => {
//     console.log("Promise fulfilled:", successRes);
// }).catch((errorRes) => {
//     console.log("Promise rejected:", errorRes);
// }).finally(() => {
//     console.log(promise);
//     console.log("Promise finally");
// })

// Promise Methods

// API -> Application Programming Interface

// all, any, race, resolve, reject

const p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve({ message: "promise p1 completed" });
    }, 4000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject({ message: "promise p2 completed" });
    }, 2000);
});
const p3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve({ message: "promise p3 completed" });
    }, 3000);
});

// p1.then((successRes) => {
//     console.log("Promise p1 fulfilled:", successRes);
// }).catch((errorRes) => {
//     console.log("Promise p1 rejected:", errorRes);
// })
// p2.then((successRes) => {
//     console.log("Promise p2 fulfilled:", successRes);
// }).catch((errorRes) => {
//     console.log("Promise p2 rejected:", errorRes);
// })
// p3.then((successRes) => {
//     console.log("Promise p3 fulfilled:", successRes);
// }).catch((errorRes) => {
//     console.log("Promise p3 rejected:", errorRes);
// })

const allPromises = Promise.all([p1, p2, p3]);

allPromises.then((successRes) => {
    console.log("Promise all fulfilled:", successRes);
    const [r1, r2, r3] = successRes;
    console.log(r1, r2, r3);
}).catch((errorRes) => {
    console.log("Promise all rejected:", errorRes);
});

// any -> Return the first fulfilled promise.

const anyPromises = Promise.any([p1, p2, p3]);

anyPromises.then((successRes) => {
    console.log("Promise any fulfilled:", successRes);
}).catch((errorRes) => {
    console.log("Promise any rejected:", errorRes);
});

// race -> Return the first settled (fulfilled or rejected) promise.

const racePromises = Promise.race([p1, p2, p3]);

racePromises.then((successRes) => {
    console.log("Promise race fulfilled:", successRes);
}).catch((errorRes) => {
    console.log("Promise race rejected:", errorRes);
});

// resolve -> Return a fulfilled promise with the specified value.
// reject -> Return a rejected promise with the specified reason.

const resolvedPromise = Promise.resolve({ message: "promise resolved" });

resolvedPromise.then((successRes) => {
    console.log("Promise resolved fulfilled:", successRes);
}).catch((errorRes) => {
    console.log("Promise resolved rejected:", errorRes);
});

const rejectedPromise = Promise.reject({ message: "promise rejected" });

rejectedPromise.then((successRes) => {
    console.log("Promise rejected fulfilled:", successRes);
}).catch((errorRes) => {
    console.log("Promise rejected rejected:", errorRes);
});

