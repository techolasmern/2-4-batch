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

export default { handleSendOTP }