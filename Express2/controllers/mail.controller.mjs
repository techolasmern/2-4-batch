import { sendEmail } from "../lib/mail.lib.mjs";

const sendMail = async (request, response) => {
    try {
        const { to, subject, text } = request.body;
        const res = await sendEmail(to, subject, text);
        if (!res) {
            return response.status(400).send({
                message: "Invalid request"
            });
        }
        return response.status(200).send({
            message: "Email sent successfully"
        });
    } catch (error) {
        return response.status(500).send({
            message: "Internal Server Error"
        })   
    }
}

export default { sendMail };