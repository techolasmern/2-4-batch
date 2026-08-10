import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const DynamicRoutePage = () => {

    const [product, setProduct] = useState(null); // object
    const { id } = useParams();

    const handleProductFetch = async (productId) => {
        try {
            const response = await fetch(`https://dummyjson.com/products/${productId}`);
            const res = await response.json()
            console.log(res)
            setProduct(res);
        } catch (err) {
            return console.log(err);
        }
    }

    useEffect(() => {
        handleProductFetch(id);
    }, [id]);

    return <div>
        <h1>{product?.title}</h1>
    </div>
};