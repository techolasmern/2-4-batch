import { useState } from "react";

const PasswordApp = () => {

    const [passwords, setPasswords] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    
    const generatePassword = (length = 0) => {
        if (length < 8 || length > 16) {
            setTimeout(() => {
                setErrorMessage("");
            }, 2000);
            return setErrorMessage("Minimum 8 char. max. 16 char.")
        }
        const string = "0123456789abcdefABCDEF~`!@#$%^&*()_+|?,.";
        const arr = [];
        while (arr.length < length) {
            const rIdx = Math.floor(Math.random() * string.length);
            const char = string[rIdx];
            arr.push(char);
        }
        return setPasswords(prevState => ([arr.join(""), ...prevState]));
    }
    
    return <div>
        <h4>Generated Password: {passwords[0]}</h4>
        <button onClick={() => generatePassword(10)}>Generate</button>
        <h2>Password History</h2>
        {
            passwords.map((pass, index) => {
                return <div key={index} style={{
                    border: "2px solid gray",
                    marginBlock: "10px",
                    padding: "10px"
                }}>
                    {pass}
                </div>
            })
        }
    </div>
}

export default PasswordApp;