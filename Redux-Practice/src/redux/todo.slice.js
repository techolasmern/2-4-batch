import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        list: []
    },
    reducers: {
        // payload: object {id: ...., title: ...., status: ..., createdAt: ..., updatedAt: ...};
        createTodo: (state, action) => {
            const payload = action.payload;
            // state.list.push(payload);
            state.list = [payload, ...state.list];
        },
        deleteTodo: (state, action) => {
            const payload = action.payload;
            state.list = state.list.filter(todo => todo.id != payload);
        },
        updateTodo: (state, action) => {
            // {id: ..., title:..., status: ... }
            const payload = action.payload;
            // title, updatedAt, status
            state.list = state.list.map(todo => {
                if (todo.id == payload.id) {
                    return { ...todo, ...payload };
                }
                return todo;
            })
        }
    }
});

export const { createTodo, deleteTodo, updateTodo } = todoSlice.actions;
// export default todoSlice.reducer;
export const { reducer: todoReducer } = todoSlice;
