import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Providers/CartProvider";
import Header from "../components/Header";

export const StorePage = () => {

    const [products, setProducts] = useState([]);
    const { setCartItems } = useContext(CartContext);

    const getProducts = async () => {
        try {
            const res = await fetch("https://dummyjson.com/products");
            const data = await res.json();
            setProducts(data.products);
        } catch (err) {
            console.log(err);
        }
    }

    const handleAddToCart = (product) => {
        setCartItems(prevItems => {
            return [product, ...prevItems];
        })
    }

    useEffect(() => {
        getProducts();
    }, []);

    return <div className="d-flex justify-content-center gap-2 flex-wrap">
        <Header />
        {
            products.map(product => {
                return <div key={product.id} style={{width: "18rem"}} className="text-center shadow">
                    <img src={product.images[0]} alt={product.title} className="w-100"/>
                    <h3>{product.title}</h3>
                    <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
                </div>
            })
        }
    </div>
};