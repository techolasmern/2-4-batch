import { model, Schema } from "mongoose";

const studentSchema = new Schema({
    rollNumber: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
    }
}, { timestamps: true });

export const studentsModel = model("students", studentSchema);