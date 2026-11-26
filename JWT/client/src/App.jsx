import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ProfilePage } from "./pages/ProfilePage";
import { ProtectedRoute } from "./ProtectedRoute";
import { LoginPage } from "./pages/LoginPage";

export const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route path="" Component={HomePage} />
                <Route path="login" element={<ProtectedRoute isAuth>
                    <LoginPage />
                </ProtectedRoute>} />
                <Route path="profile" element={<ProtectedRoute>
                    <ProfilePage />
                </ProtectedRoute>} />
            </Route>
            <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
    </BrowserRouter>
}