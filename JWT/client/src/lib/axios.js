import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_SERVER_BASE_URL
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})