import { sendOTP } from "../lib/mail.lib.mjs";
import { OTPModel } from "../models/otp.model.mjs";

const handleSendOTP = async (request, response) => {
    try {
        const { receiver_email } = request.body;
        if(!receiver_email) {
            return response.status(400).send({ message: "Receiver email is required" });
        }
        const user_exist = await OTPModel.findOne({ receiver_email });
        const currentTime = Math.floor(Date.now() / 1000);
        if (user_exist && currentTime < user_exist.resend_at) {
            const remTime = user_exist.resend_at - currentTime;
            return response.status(400).send({ message: `OTP already sent, please wait for ${remTime} seconds` });
        }
        const res = await sendOTP(receiver_email);
        if (!res) {
            return response.status(500).send({ message: "Failed to send OTP" });
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
        return response.status(500).send({ message: "Internal Server Error" });
    }
}

const handleVerifyOTP = async (request, response) => {
    try {
        const { email, otp } = request.body;
        if (!email || !otp) {
            return response.status(400).send({ message: "Missing required fields" });
        }
        const otp_data = await OTPModel.findOne({ receiver_email: email });
        if(!otp_data) {
            return response.status(400).send({ message: "Please send OTP first before verifying" });
        }
        if (!otp_data.otp) {
            return response.status(400).send({ message: "Invalid OTP" });
        }
        const current_time = Math.floor(Date.now() / 1000);
        if (current_time > otp_data.expire_at) {
            return response.status(400).send({ message: "OTP expired" });
        }
        if (otp_data.otp !== otp) {
            return response.status(400).send({ message: "OTP is incorrect" });
        }
        otp_data.otp = "";
        otp_data.expire_at = 0;
        otp_data.resend_at = 0;
        await otp_data.save();
        return response.status(200).send({ message: "OTP verified successfully" });
    } catch (error) {
        return response.status(500).send({ message: "Internal Server Error" });
    }
}

const resendOTP = async (request, response) => {
    try {
        const { receiver_email } = request.body;
        if (!receiver_email) {
            return response.status(400).send({ message: "Receiver email is required" });
        }
        const otp_data = await OTPModel.findOne({ receiver_email });
        if (!otp_data) {
            return response.status(400).send({ message: "Please send OTP first before resending" });
        }
        const current_time = Math.floor(Date.now() / 1000);
        if (current_time > otp_data.expire_at) {
            return response.status(400).send({ message: "Please send OTP first before resending" });
        }
        if (current_time < otp_data.resend_at) {
            const diff = otp_data.resend_at - current_time;
            return response.status(400).send({ message: `OTP already sent, please wait for ${diff} seconds` });
        }
        return handleSendOTP(request, response);
    } catch (error) {
        return response.status(500).send({ message: "Internal Server Error" });
    }
}

export default { handleSendOTP, handleVerifyOTP, resendOTP };