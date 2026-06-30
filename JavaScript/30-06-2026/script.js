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