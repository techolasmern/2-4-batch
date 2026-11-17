import otpGen from "otp-generator";
import { transporter } from "../config/nodemailer.config.mjs";

const generateOTP = (len = 4) => {
    // number, number + letter, special character, upper, lower , mix
    // const str = "0123456789";
    // let otp = [];
    // while (otp.length < len) {
    //     const rIndex = Math.floor(Math.random() * str.length);
    //     const rChar = str[rIndex];
    //     otp.push(rChar);
    // }
    // return otp.join("");

    return otpGen.generate(len, {
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false
    });
}

const sendMail = async (to, otp) => {
    try {
        const response = await transporter.sendMail({
            to, subject: "OTP Verification", text: `Your OTP is: ${otp}`
        });
        return response;
    } catch (error) {
        return null;
    }
}

export const sendOTP = async (to) => {
    try {
        const otp = generateOTP(4);
        const response = await sendMail(to, otp);
        return response ? { otp } : null;
    } catch (error) {
        return null;
    }
}