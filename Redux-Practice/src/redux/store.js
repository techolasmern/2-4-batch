import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todo.slice";
import { productReducer } from "./products.slice";

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        products: productReducer
    }
})