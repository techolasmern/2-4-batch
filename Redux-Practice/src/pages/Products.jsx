import { useEffect, useState } from "react";
import { api } from "../axios";

export const Products = () => {

    const [isLoading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        setLoading(true);
        try {
            const response = await api.get("/products");
            setProducts(response.data.products);
        } catch (err) {
            return alert(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }

    return <div>{console.log(products)}</div>
};