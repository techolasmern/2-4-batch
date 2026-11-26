import { Navigate } from "react-router";
import auth from "./lib/auth";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";

const ToLogin = () => {
    useEffect(() => {
        auth.removeToken();
    }, []);
    return <Navigate to={"/login"}/>
}

export const ProtectedRoute = ({ children, isAuth }) => {
    
    const token = auth.getToken();

    if (!token) {
        if (isAuth) {
            return children;
        }
        return <ToLogin />
    }

    try {
        const decoded = jwtDecode(token);
        const exp = decoded.exp;
        const ct = Math.floor(Date.now() / 1000);
        if (ct > exp) {
            if (isAuth) {
                return children;
            }
            return <ToLogin />
        }
        if (isAuth) {
            return <Navigate to={"/"} />
        } 
        return children;
    } catch (error) {
        if(isAuth){
            return children;
        }
        return <ToLogin />
    }
};