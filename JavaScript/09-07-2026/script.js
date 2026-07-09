const emailjs_api = "https://api.emailjs.com/api/v1.0/email/send";

const content_type = "application/json";

const serviceId = "Your service ID";
const templateId = "Your Template ID";
const publicKey = "Your public key";

const sendMail = async () => {
    try {
        const data = {
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
                name: "<replace the name variable>",
                company_mail: "<replace the company mail variable>",
                email: "<replace the email variable>"
            }
        }
        const response = await fetch(emailjs_api, {
            method: "POST",
            headers: {
                "Content-Type": content_type
            },
            body: JSON.stringify(data)
        });
        const res = await response.text();
        return res == "OK";
    } catch (err) {
        return console.log(err);
    }
}

// localstorage

const getStudents = () => {
    const storedData = localStorage.getItem("students");
    const studentsArray = storedData ? JSON.parse(storedData) : [];
    return studentsArray;
}

const setStudents = (studentsArray) => {
    const toJson = JSON.stringify(studentsArray);
    return localStorage.setItem("students", toJson);
}

const addStudent = (student) => {
    const students = getStudents();
    console.log(students)
    students.push(student);
    return setStudents(students);
}

// addStudent({ rn: 1894, name: "Amal", age: 24, course: "PYTHON", phone: 8765435674 })

console.log(getStudents())