// API -> Application Programming Interface

// js -> client side language
// react -> client side framework
// angular -> client side framework

// middle service -> api

// client -> send -> api -> database
// database -> get -> client -> display

// https://fakestoreapi.com/products

// fetch - Method
// fetch() -> returns a Promise object.

// .then() -> .catch() -> methods of Promise object.
// try, catch -> async / await -> methods of Promise object.

// fetch("https://fakestoreapi.com/products").then(successRes => {
//     return successRes.json();
// }).then(jsonRes => {
//     console.log(jsonRes); // final result
// }).catch(errorRes => {
//     console.log(errorRes); // error message
// }).finally(() => {
//     console.log("Promise finally");
// })

// async function sample() {
    
// }

const handleApiCall = async () => {
    try {
        const successRes = await fetch("https://fakestoreapi.com/products");
        const jsonRes = await successRes.json();
        console.log(jsonRes); // final result
        jsonRes.forEach(prod => {
            document.writeln(prod.title + "($" + prod.price + ")"  + "<br>");
        })
    } catch (error) {
        console.log(error); // error message
    }
}

handleApiCall();