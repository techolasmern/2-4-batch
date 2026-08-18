import { useState } from "react";
import { localLogin, setLocalData } from "../lib/storage"
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const LoginPage = () => {

    const [formData, setFormData] = useState({
        username: "",password: ""
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({ username: "", password: "", });

    const validateForm = () => {
        for (const key in formData) {
            if (!formData[key]) {
                return setErrors((err) => {
                    return { ...err, [key]: "This field isrequired!" };
                });
            }
        }
        const usernameRegex = /^[a-z0-9_]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[a-zA-Z\d\W]{8,}$/;

        if(!usernameRegex.test(formData.username)) {
            return setErrors((err) => {
                return { ...err, username: "Username must contain only letters, numbers, and underscores!" };
            });
        }
        if(!passwordRegex.test(formData.password)) {
            return setErrors((err) => {
                return { ...err, password: "Password must contain at least one lowercase letter, one uppercase letter, and one number!" };
            });
        }
        return true;
    }

    const handleChange = (event) => {
        let { name, value } = event.target;
        if (errors[name]) {
            setErrors(prevErrors => {
                return { ...prevErrors, [name]: "" };
            });
        }
        setFormData((prevFormData) => {
            if (name === "username") {
                value = value.toLowerCase();
            }
            return { ...prevFormData, [name]: value };
        })
    }

    const handleSubmit = (submitEvent) => {
        submitEvent.preventDefault();
        const isValidForm = validateForm();
        console.log(isValidForm);
        if (!isValidForm) return;
        const res = localLogin(formData.username, formData.password);
        if (res.ok) {
            toast.success("Login successful!");
            setFormData({
                username: "", password: "",
            });
            return navigate("/dashboard", { replace: true });
        } 
        setErrors(prev => {
            return { ...prev, [res.field]: res.error };
        })
    }

    return <div className="vw-100 d-flex justify-content-center">
        <form className="w-100" style={{ maxWidth: "450px" }} onSubmit={handleSubmit}>
            
            <div className="d-flex flex-column">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" placeholder="johnuser001" value={formData.username} onChange={handleChange} />
                <span className="text-danger">{errors.username}</span>
            </div>
           
            <div className="d-flex flex-column">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="*********" value={formData.password} onChange={handleChange} />
                <span className="text-danger">{errors.password}</span>
            </div>
          

            <button type="submit" className="btn btn-success w-100 mt-3">Login</button>
        </form>
    </div>;
};