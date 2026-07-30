// hook -> useEffect

import { useEffect, useState } from "react"

export const LifeCycle = () => {

    const [counter, setCounter] = useState(0);
    const [timer, setTimer] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [counter]);

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    const getProducts = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json()
            setProducts(data);
        } catch (err) {
            return alert("Failed to fetch");
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return <div>
        <button onClick={handleIncrement}>Click Me - {counter}</button>
        <p>Timer: {timer}</p>
        <div>
            {
                products.map(product => {
                    return <div key={product.id}>
                        <h4>{product.title}</h4>
                    </div>
                })
            }
        </div>
    </div>
}