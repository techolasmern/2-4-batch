import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../axios";

const getProducts = async () => {
    const response = await api.get("/products");
    return response.data.products;
}

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (id) => {
    console.log(id);
    const response = await getProducts();
    return response;
});

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
            state.error = null;
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