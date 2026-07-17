// oops -> object oriented programming system

// class & objects

// class -> Template or blueprint
// object -> Instance of class
// this -> current object -> global object

// class
class Vehicle{

    constructor(value) {
        this.data = value;
        console.log("Created", value);
    }

    display(word) {
        console.log(word);
    }

    sum(a, b) {
        this.result = a + b + this.data;
    }

}

// object or instance
const resObj = new Vehicle(100);

resObj.sum(10, 20);
console.log(resObj.result)




