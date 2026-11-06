import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "connect.icebergdev@gmail.com",
        pass: "jacl faiv ohbz scal"
    }
});