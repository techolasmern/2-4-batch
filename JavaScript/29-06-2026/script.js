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
    }
}

student.skills.push("node");
student.skills.unshift("git");
student.department = "BCA";
student.grade = "A+"; // create, if it is not exists.

console.log(student);


