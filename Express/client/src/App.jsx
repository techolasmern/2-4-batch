import { useState } from "react";

export const App = () => {

    const [student, setStudent] = useState(null);

    const handleGetStudentData = async () => {
        const studentRN = Math.floor(Math.random() * (120 - 101)) + 101;
        const response = await fetch(`http://localhost:5000/api/students/${studentRN}`);
        const data = await response.json();
        setStudent(data);
    }

    return <div>
        <button onClick={handleGetStudentData}>Get Student Data</button>
        <div>
            {student?.name}
        </div>
    </div>
}