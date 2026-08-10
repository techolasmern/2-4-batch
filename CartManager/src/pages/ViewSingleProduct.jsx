import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const ViewSingleProduct = () => {

    const { product_id } = useParams();
    const [product, setProduct] = useState(null);

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
        handleProductFetch(product_id);
    }, [product_id]);

    return <div className="d-flex gap-5">
        <div>
            <img src={product?.thumbnail} alt={product?.title} />
        </div>
        <div>
            <h2>{product?.title}</h2>
            <div className="d-flex gap-2 ">
                <s className="text-muted">${product?.price}</s>
                <p>${(product?.price - (product?.price * (product?.discountPercentage / 100))).toFixed(2)}</p>
            </div>
        </div>
    </div>
};