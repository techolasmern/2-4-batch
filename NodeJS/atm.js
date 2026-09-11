const readlineSync = require("readline-sync");

let amount = 100000;

console.log("Welcome ABC ATM");
console.log("Please enter:");
console.log("1. for widthdaw");
console.log("2. for balance");
console.log("3. for deposit");
console.log("4. for exit");

while (true) {
    const option = readlineSync.questionInt("Enter option: ");
    if (option === 1) {
        const withdrawAmount = readlineSync.questionInt("Enter withdraw amount: ");
        if (amount <= 0) {
            console.log("You have no balance.");
            continue;
        }
        if (withdrawAmount <= 0) {
            console.log("Invalid amount");
            continue;
        }
        if (withdrawAmount > amount) {
            console.log("Insufficient balance");            
            continue;
        }
        amount -= withdrawAmount;
        console.log("Your withdrawal of ₹" + withdrawAmount + " is success");
        console.log("Balance: " + amount);
    }
    if (option === 4) {
        break;
    }
}