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

// create a todo list

// const todo = {
//     id: xxxxxxxx,
//     title: xxxxxxxxx,
//     description: xxxxxxxxxx,
//     createdAt: xxxxxxxxxxxxxxx,
//     updatedAt: xxxxxxxxxxxxxx
// }

class Todo{
    constructor() {
        this.todo_list = [];
    }

    #getId = () => {
        const str = "abcdef0123456789";
        const arr = [];
        let len = 10;
        while (len--) {
            const randomIndex = Math.floor(Math.random() * str.length);
            const randomChar = str[randomIndex];
            arr.push(randomChar);
        }
        return arr.join("");
    }

    insertOne = (title, description) => {
        const todoObj = {
            id: this.#getId(),
            title, description,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        this.todo_list.unshift(todoObj);
        return todoObj;
    }
    
    deleteOne = (id) => {
        const deleted = this.todo_list.find(todo => todo.id == id);
        this.todo_list = this.todo_list.filter(todo => todo.id != id);
        return deleted;
    }

    updateOne = (id, updatedObj) => {
        const index = this.todo_list.findIndex(todo => todo.id == id);
        if (index == -1) {
            return "Todo does not exists."
        }
        this.todo_list[index] = {
            ...this.todo_list,
            ...updatedObj,
            updatedAt: new Date()
        }
        return this.todo_list[index];
    }

    // view single task -> HW

    list = () => {
        return this.todo_list;
    }
}

const todo = new Todo();

console.log(todo.insertOne("Sample 1", "This is a sample task 1"));
console.log(todo.insertOne("Sample 2", "This is a sample task 2"));

console.log(todo.list())

// add validations
// use local storage