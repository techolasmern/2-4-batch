import { useState } from "react";

export const FormPage = () => {

    const [formData, setFormData] = useState({
        name: "", username: "", phone: "", email: "", password: "", confirm_password: "",
    });

    const handleChange = (event) => {
        setFormData((prevFormData) => {
            if (event.target.name === "username") {
                event.target.value = event.target.value.toLowerCase();
            }
            return { ...prevFormData, [event.target.name]: event.target.value };
        })
    }

    const handleSubmit = (submitEvent) => {
        submitEvent.preventDefault();
        // validate form
        console.log(formData)
    }

    return <div className="vw-100 d-flex justify-content-center">
        <form className="w-100" style={{ maxWidth: "450px" }} onSubmit={handleSubmit} onChange={handleChange}>
            <div className="d-flex flex-column">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="John" defaultValue={formData.name} />
            </div>
            <div className="d-flex flex-column">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" placeholder="johnuser001" defaultValue={formData.username} />
            </div>
            <div className="d-flex flex-column">
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" name="phone" placeholder="9876543210" defaultValue={formData.phone} />
            </div>
            <div className="d-flex flex-column">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" placeholder="john@example.com" defaultValue={formData.email} />
            </div>
            <div className="d-flex flex-column">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="*********" defaultValue={formData.password} />
            </div>
            <div className="d-flex flex-column">
                <label htmlFor="confirm_password">Confirm Password</label>
                <input type="password" id="confirm_password" name="confirm_password" placeholder="*********" defaultValue={formData.confirm_password} />
            </div>

            <button type="submit" className="btn btn-success w-100 mt-3">Create Account</button>
        </form>
    </div>;
};