import { api } from "./axios";

export const App = () => {

    const handleGenerate = async () => {
        try {
            const response = await api.post("/api/auth/token/generate", { id: 123 });
            if (response.status !== 200) {
                throw new Error("Login failed");
            }
            localStorage.setItem("token", response.data.token);
            return alert("Login successful");
        } catch (e) {
            console.log(e);
        }
    }

    const handleCheck = async () => {
        try {
            const response = await api.get("/api/auth/token/check");
            if (response.status !== 200) {
                throw new Error("Error checking token");
            }
            return alert("checked");
        } catch (e) {
            console.log(e);
        }
    }

    return <div>
        <button onClick={handleGenerate}>Generate Token</button>

        <button onClick={handleCheck}>Check</button>
    </div>
};