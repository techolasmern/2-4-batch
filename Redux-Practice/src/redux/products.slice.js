import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../axios";

const getProducts = async () => {
    const response = await api.get("/products");
    return response.data.products;
}

const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await getProducts();
    return response;
})

const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
});

export const { reducer: productReducer } = productSlice;