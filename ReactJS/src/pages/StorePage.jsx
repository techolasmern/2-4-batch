import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Providers/CartProvider";
import Header from "../components/Header";
import { api } from "../axiosInstance";

export const StorePage = () => {

    const [products, setProducts] = useState([]);
    const { setCartItems } = useContext(CartContext);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setLoading] = useState(true);

    const getProducts = async () => {
        try {
            setLoading(true);
            const res = await api.get("/products");
            setProducts(res.data.products);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
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

    const handleSearch = async () => {
        try {
            setLoading(true);
            const res = await api.get(`/products/search?q=${searchQuery}`);
            setProducts(res.data.products);
        } catch (err) {
            return console.log(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const debouce = setTimeout(() => {
            handleSearch();
        }, 1000);
        return () => {
            clearTimeout(debouce);
        }
    }, [searchQuery]);

    if (isLoading) {
        return <div>Loading...</div>
    }

    return <div>
        <div>
            <input type="text" onChange={(event) => setSearchQuery(event.target.value)} value={searchQuery} />
            <button onClick={handleSearch}>Search</button>
        </div>
        <div className="d-flex justify-content-center gap-2 flex-wrap">
            {
                products.map(product => {
                    return <div key={product.id} style={{ width: "18rem" }} className="text-center shadow">
                        <img src={product.images[0]} alt={product.title} className="w-100" />
                        <h3>{product.title}</h3>
                        <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
                    </div>
                })
            }
        </div>
    </div>
};