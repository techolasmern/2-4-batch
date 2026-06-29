// Object, Math, Date

// Object -> Collection of key value pair

const arr = [1, 2, 3, 4];

// name, rn, age, department, grade, skills, address

// const std = ["ajith", 25, 24, "CS", "A", "writer", "kozhikode"]; // 
// console.log(std[2]);

const student = {
    name: "Ajith",
    rn: 25,
    age: 24,
    department: "CS",
    skills: ["html", "css", "js", "react"],
    address: {
        house_name: "demo house name",
        city: "kozhikode",
        state: "keralam",
        pin_code: 675643
    },
    add: function () {
        return student.age + student.rn;
    }
}

console.log(student.add());

student.skills.push("node");
student.skills.unshift("git");
student.department = "BCA";
student.grade = "A+"; // create, if it is not exists.

console.log(student);

// Object Methods

// const obj = new Object();
// obj.name = "Riya";
// console.log(obj);

// Object.keys(), Object.values(), Object.entries(), Object.freeze(), Object.seal(), Object.hasOwn()

const valueResponse = Object.values(student);
console.log(valueResponse);

const keyResponse = Object.keys(student);
console.log(keyResponse);

const entriesResponse = Object.entries(student);
console.log(entriesResponse);

// Object.freeze(student);
Object.seal(student);

student.college = "GPTC"; 
student.name = "sdhfgwieuhfksjdhfksjdf"; 

console.log(student);

const isOwn = Object.hasOwn(student.address, "pin_code");
console.log(isOwn);

// Math -> Math Object

console.log(Math.PI);
console.log(Math.LOG10E)
console.log(Math.SQRT2)
console.log(Math.SQRT1_2);

console.log(Math.abs(-20));
console.log(Math.sqrt(81));

console.log(Math.round(10.1));
console.log(Math.ceil(10.01));
console.log(Math.floor(10.99));


console.log(Math.floor(Math.random() * 10)); // 0 , 9

console.log(Math.min(5, 3, 8, -4, 5, 2, 0));
console.log(Math.max(5, 3, 8, -4, 5, 2, 0));


