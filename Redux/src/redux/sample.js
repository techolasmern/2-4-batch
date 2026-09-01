import { createSlice } from "@reduxjs/toolkit";

const sampleSlice = createSlice({
    name: "sample",
    initialState: {
        counter: 0
    },
    reducers: {
        increment: (state, action) => {
            console.log(action);
            state.counter = state.counter + action.payload
        },
        decrement: (state, action) => {
            state.counter = state.counter - action.payload
        },
        reset: (state, action) => {
            state.counter = action.payload
        }
    }
});

export const actions = sampleSlice.actions;
export default sampleSlice.reducer;