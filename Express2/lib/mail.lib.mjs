import { transporter } from "../config/mail.config.mjs";

export const sendEmail = async (to, subject, text) => {
    if (!to) {
        return false;
    }
    try {
        const response = await transporter.sendMail({
            from: "VISHNU",
            to,
            subject,
            text
        });
        if (response.messageId) return true;
        return false;
    } catch (err) {
        console.log(err.message);
        return false;
    }
}