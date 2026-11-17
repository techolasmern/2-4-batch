import { model } from "mongoose";
import { Schema } from "mongoose";

const otpSchema = new Schema({
    receiver_email: {
        type: String,
        required: true,
        unique: true
    },
    otp: {
        type: String
    },
    expire_at: {
        type: Number
    },
    resend_at: {
        type: Number
    },
    resend_count: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

export const OTPModel = model("otps", otpSchema);