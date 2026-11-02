import { Schema, model } from "mongoose";

const passwordSchema = new Schema({
    hash: {
        type: String,
        required: [true, "Hash is required"]
    }
}, { timestamps: true });

export const passwordModel = model("passwords", passwordSchema);