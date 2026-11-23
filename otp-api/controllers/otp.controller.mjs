import { sendOTP } from "../lib/mail.lib.mjs";
import { OTPModel } from "../models/otp.model.mjs";
import { createError } from "../utils/error.utils.mjs";

const handleSendOTP = async (request, response, next) => {
    try {
        const { receiver_email } = request.body;
        if (!receiver_email) {
            throw createError("Receiver email is required", 400);
        }
        const user_exist = await OTPModel.findOne({ receiver_email });
        const currentTime = Math.floor(Date.now() / 1000);
        if (user_exist && currentTime < user_exist.resend_at) {
            const remTime = user_exist.resend_at - currentTime;
            throw createError(`OTP already sent, please wait for ${remTime} seconds`, 400);
        }
        const res = await sendOTP(receiver_email);
        if (!res) {
            throw createError("Failed to send OTP", 500);
        }
        if (!user_exist) {
            await OTPModel.create({ receiver_email, otp: res.otp, expire_at: currentTime + 300, resend_at: currentTime + 60 });
        } else {
            user_exist.otp = res.otp;
            user_exist.expire_at = currentTime + 300;
            user_exist.resend_at = currentTime + 60;
            await user_exist.save();
        }
        return response.status(200).send({ message: "OTP sent successfully", otp: res.otp });
    } catch (error) {
        next(error);
    }
}

const handleVerifyOTP = async (request, response, next) => {
    try {
        const { email, otp } = request.body;
        if (!email || !otp) {
            throw createError("Missing required fields", 400);
        }
        const otp_data = await OTPModel.findOne({ receiver_email: email });
        if(!otp_data) {
            throw createError("Please send OTP first before verifying", 400);
        }
        if (!otp_data.otp) {
            throw createError("OTP expired", 400);
        }
        const current_time = Math.floor(Date.now() / 1000);
        if (current_time > otp_data.expire_at) {
            throw createError("OTP expired", 400);
        }
        if (otp_data.otp !== otp) {
            throw createError("OTP is incorrect", 400);
        }
        otp_data.otp = "";
        otp_data.expire_at = 0;
        otp_data.resend_at = 0;
        await otp_data.save();
        return response.status(200).send({ message: "OTP verified successfully" });
    } catch (error) {
        next(error);
    }
}

const resendOTP = async (request, response, next) => {
    try {
        const { receiver_email } = request.body;
        if (!receiver_email) {
            throw createError("Receiver email is required", 400);
        }
        const otp_data = await OTPModel.findOne({ receiver_email });
        if (!otp_data) {
            throw createError("Please send OTP first before resending", 400);
        }
        const current_time = Math.floor(Date.now() / 1000);
        if (current_time > otp_data.expire_at) {
            throw createError("OTP expired", 400);
        }
        if (current_time < otp_data.resend_at) {
            const diff = otp_data.resend_at - current_time;
            throw createError(`OTP already sent, please wait for ${diff} seconds`, 400);
        }
        return handleSendOTP(request, response);
    } catch (error) {
        next(error);
    }
}

export default { handleSendOTP, handleVerifyOTP, resendOTP };