import { Navigate } from "react-router";

export const ProtectedRoute = ({ children }) => {
    const isAuthenticated = true;
    if (!isAuthenticated) {
        return <Navigate to={"/"}/>
    }
    return children;
};