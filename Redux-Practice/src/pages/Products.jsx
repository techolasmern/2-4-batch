import { useEffect, useState } from "react";
import { api } from "../axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/products.slice";

export const Products = () => {

    const { products, loading, error } = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    return <div>Products: {console.log(products)}</div>
};