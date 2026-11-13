import "dotenv/config";
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.G_USER,
        pass: process.env.G_PASS
    }
});