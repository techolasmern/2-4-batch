// oops -> object oriented programming system

// class & objects

// class -> Template or blueprint
// object -> Instance of class
// this -> current object -> global object

// class
// class Vehicle{

//     constructor(value) {
//         this.data = value;
//         console.log("Created", value);
//     }

//     display(word) {
//         console.log(word);
//     }

//     sum(a, b) {
//         this.result = a + b + this.data;
//     }

// }

// // object or instance
// const resObj = new Vehicle(100);

// resObj.sum(10, 20);
// console.log(resObj.result)


// ----------------------------------------------------------------

// Inheritance > inherit features ( methods, properties) from one class to another.
// Encapsulation > Bundling of data & methods in to a single unit.
// Abstraction > Hides unneccessary implementation.
// Polymorphism > More than one form. ( The same method can behave differently.)
// 1. overloading, 2. overriding

// inheritance

class Vehicle{
    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }

    getVehicle() {
        return this.name + " > " + this.model + " > " + this.year;
    }
}

class Car extends Vehicle{
    getVehicle(label) {
        return label + ": " + this.name;
    }
    superCall() {
        return super.getVehicle();
    }
}

// const veh1 = new Vehicle("BMW", "X5", 2024);
// const veh2 = new Vehicle("Toyota", "Fortuner", 2023);

// console.log(veh1.getVehicle());
// console.log(veh2.getVehicle());

const v = new Car("BMW", "X5", 2024);

console.log(v.getVehicle("Car"))
console.log(v.superCall());
