import "dotenv/config";
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.gmail_user,
        pass: process.env.gmail_pass
    }
})