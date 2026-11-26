import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ProfilePage } from "./pages/ProfilePage";
import { ProtectedRoute } from "./ProtectedRoute";

export const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route path="" Component={HomePage} />
                <Route path="profile" element={<ProtectedRoute>
                    <ProfilePage />
                </ProtectedRoute>} />
            </Route>
        </Routes>
    </BrowserRouter>
}