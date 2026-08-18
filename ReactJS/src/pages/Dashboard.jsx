import { useNavigate } from "react-router";
import { getLoggedUser, logout } from "../lib/storage";
import { useEffect } from "react";

export const Dashboard = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const loggedUser = getLoggedUser();
        if (!loggedUser) {
            return navigate("/login");
        }
    }, []);

    return <div>
        <h1>Dashboard</h1>
        <button onClick={() => {
            logout();
            navigate("/login");
        }}>Logout</button>
    </div>;
};