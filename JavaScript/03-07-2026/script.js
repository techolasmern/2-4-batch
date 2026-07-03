// async, await

const myFirstPromise = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve({ message: "promise p1 completed" });
    }, 4000);
});
const mySecondPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject({ message: "promise p2 completed" });
    }, 2000);
});
const myThirdPromise = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve({ message: "promise p3 completed" });
    }, 3000);
});

const handlePromise = async () => {
    try {
        const firstResponse = await myFirstPromise();
        console.log(firstResponse);
    } catch (error) {
        console.log("Rejected:", error);
    }
    try {
        const secondResponse = await mySecondPromise();
        console.log(secondResponse);
    } catch (error) {
        console.log("Rejected:", error);
    }
    try {
        const thirdResponse = await myThirdPromise();
        console.log(thirdResponse);
    } catch (error) {
        console.log("Rejected:", error);
    }
}

handlePromise();

// API -> Application Programming Interface

// json -> JavaScript Object Notation

// jsonString
const jsonStringOrg = '{ "name": "Techolas", "age": 25, "city": "Delhi", "country": "India", "phone": 9876543210 }';

// parse -> convert jsonString to JavaScript Object
const jsObj = JSON.parse(jsonStringOrg);
console.log(jsObj);

// stringify -> convert JavaScript Object to jsonString
const jsonString = JSON.stringify(jsObj);
console.log(jsonString);

// sample
localStorage.setItem("user", JSON.stringify({ name: "Techolas", age: 30 }));
