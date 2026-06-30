// destructure
// Spread operator
//  Rest parameter

//  LocalStorage
//  SessionStorage

const arr = [456, 234, 678, 234, 983];

// const firstElem = arr[0];
// const secondElem = arr[1];
// const thirdElem = arr[2];
// const fourthElem = arr[3];
// const fifthElem = arr[4];

const [a, b, c, d, e] = arr;

console.log(a, b, c, d, e);

const obj = {
    name: "Ajith",
    age: 20,
    department: "CS",
    city: "Kozhikode"
}

// const name = obj.name;
// const age = obj.age;
// const department = obj.department;
// const city = obj.city;

const { city, department, name, age } = obj;

console.log(city, department, name, age);

// spread
// pass by reference, pass by value

const array = [1, 2, 3, 4, 5];
const anotherArray = [...array];
anotherArray.push(6);

console.log(array);
console.log(anotherArray);

const user = { name: "Rahul", age: 25 };
const anotherUser = {...user};
anotherUser.age = 30;
console.log(user);
console.log(anotherUser);

// Rest operator
// get remaining values from array and object

const numbers = [1, 2, 3, 4, 5, 6];
const [fn, sn, ...remaining] = numbers;
console.log(fn, sn, remaining);

const studentInfo = { name: "Midhun", age: 20, place: "Kozhikode", mark: 90 };
const { mark, place, ...rem } = studentInfo;
console.log(mark, place, rem);

// localStorage
// sessionStorage

// localStorage.removeItem("name");
localStorage.setItem("name", "Midhun - 2");
localStorage.clear();
const localName = localStorage.getItem("name");
console.log(localName);

// sessionStorage
// sessionStorage.setItem("temp_name", "amal");
const sessionName = sessionStorage.getItem("temp_name");
console.log(sessionName);


const employees = [
    { name: "Alice", age: 30, salary: 70000, department: "Engineering" },
    { name: "Bob", age: 45, salary: 80000, department: "Marketing" },
    { name: "Charlie", age: 35, salary: 65000, department: "Engineering" },
    { name: "David", age: 50, salary: 90000, department: "Management" },
    { name: "Eve", age: 28, salary: 50000, department: "Marketing" },
    { name: "Frank", age: 40, salary: 75000, department: "Finance" },
    { name: "Grace", age: 32, salary: 62000, department: "Engineering" },
    { name: "Hannah", age: 27, salary: 55000, department: "Marketing" },
    { name: "Isaac", age: 38, salary: 68000, department: "HR" },
    { name: "Jack", age: 42, salary: 72000, department: "Finance" },
    { name: "Kara", age: 29, salary: 54000, department: "Engineering" },
    { name: "Leo", age: 33, salary: 58000, department: "HR" },
    { name: "Mona", age: 47, salary: 82000, department: "Marketing" },
    { name: "Nina", age: 31, salary: 69000, department: "Finance" },
    { name: "Oliver", age: 36, salary: 73000, department: "Management" }
];

const namesArray = employees.map((employee) => {
    return employee.name.toUpperCase();
})
console.log(namesArray)