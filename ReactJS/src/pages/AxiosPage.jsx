import { useEffect } from "react";
import { api } from "../axiosInstance";

export const AxiosPage = () => {

    // http methods -> get, post, patch, delete, put

    const apiHandler = async () => {
        try {
            const response = await api.get("/products");
            console.log(response.data.products);
        } catch (err) {
            return console.log(err);
        }
    }

    useEffect(() => {
        apiHandler();
    }, [])

    return <div>
        axios
    </div>
};