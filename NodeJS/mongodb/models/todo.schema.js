import { model, Schema } from "mongoose";
// _id
const todoSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    is_completed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

export const todoModel = model("todos", todoSchema);