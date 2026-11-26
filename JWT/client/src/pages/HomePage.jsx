import { useNavigate } from "react-router";
import auth from "../lib/auth";

export const HomePage = () => {
    
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.removeToken();
        navigate("/login");
    }
    
    return <div>HomePage - <button onClick={handleLogout}>Logout</button></div>
};