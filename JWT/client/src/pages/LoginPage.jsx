import auth from "../lib/auth";

export const LoginPage = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // call login api
        // will get token as response
        auth.setToken("123456");
    }

    return <div>
        
    </div>
};