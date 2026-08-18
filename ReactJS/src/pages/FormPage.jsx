import { useState } from "react";
import { setLocalData } from "../lib/storage"
import { toast } from "react-toastify";

export const FormPage = () => {

    const [formData, setFormData] = useState({
        name: "", username: "", phone: "", email: "", password: "", confirm_password: "",
    });
    const [errors, setErrors] = useState({ name: "", username: "", phone: "", email: "", password: "", confirm_password: "", });

    const validateForm = () => {
        for (const key in formData) {
            if (!formData[key]) {
                return setErrors((err) => {
                    return { ...err, [key]: "This field isrequired!" };
                });
            }
        }
        const nameRegex = /^[a-zA-Z\s'`]+$/;
        const usernameRegex = /^[a-z0-9_]+$/;
        const phoneRegex = /^[0-9]{10}$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[a-zA-Z\d\W]{8,}$/;
        if(!nameRegex.test(formData.name)) {
            return setErrors((err) => {
                return { ...err, name: "Name must contain only letters and apostrophes!" };
            });
        }
        if(!usernameRegex.test(formData.username)) {
            return setErrors((err) => {
                return { ...err, username: "Username must contain only letters, numbers, and underscores!" };
            });
        }
        if(!phoneRegex.test(formData.phone)) {
            return setErrors((err) => {
                return { ...err, phone: "Phone must contain only numbers!" };
            });
        }
        if(!emailRegex.test(formData.email)) {
            return setErrors((err) => {
                return { ...err, email: "Email must be a valid email address!" };
            });
        }
        if(!passwordRegex.test(formData.password)) {
            return setErrors((err) => {
                return { ...err, password: "Password must contain at least one lowercase letter, one uppercase letter, and one number!" };
            });
        }
        if(formData.password !== formData.confirm_password) {
            return setErrors((err) => {
                return { ...err, confirm_password: "Passwords do not match!" };
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
        if (!isValidForm) return;
        const res = setLocalData(formData);
        if (res.ok) {
            toast.success("Registration successful!");
            return setFormData({
                name: "", username: "", phone: "", email: "", password: "", confirm_password: "",
            });
        } 
        setErrors(prev => {
            return { ...prev, [res.field]: res.error };
        })
    }

    return <div className="vw-100 d-flex justify-content-center">
        <form className="w-100" style={{ maxWidth: "450px" }} onSubmit={handleSubmit}>
            <div className="d-flex flex-column">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="John" value={formData.name} onChange={handleChange} />
                <span className="text-danger">{errors.name}</span>
            </div>
            <div className="d-flex flex-column">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" placeholder="johnuser001" value={formData.username} onChange={handleChange} />
                <span className="text-danger">{errors.username}</span>
            </div>
            <div className="d-flex flex-column">
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" name="phone" placeholder="9876543210" value={formData.phone} onChange={handleChange} />
                <span className="text-danger">{errors.phone}</span>
            </div>
            <div className="d-flex flex-column">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} />
                <span className="text-danger">{errors.email}</span>
            </div>
            <div className="d-flex flex-column">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="*********" value={formData.password} onChange={handleChange} />
                <span className="text-danger">{errors.password}</span>
            </div>
            <div className="d-flex flex-column">
                <label htmlFor="confirm_password">Confirm Password</label>
                <input type="password" id="confirm_password" name="confirm_password" placeholder="*********" value={formData.confirm_password} onChange={handleChange} />
                <span className="text-danger">{errors.confirm_password}</span>
            </div>

            <button type="submit" className="btn btn-success w-100 mt-3">Create Account</button>
        </form>
    </div>;
};