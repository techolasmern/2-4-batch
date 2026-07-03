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