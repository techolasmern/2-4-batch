import "dotenv/config";
import jwt from "jsonwebtoken";

const generateToken = (request, response) => {
    try {
        if (!request?.body) {
            return response.status(400).send({ message: "Required field is missing" });
        }
        const data = request.body;
        const token = jwt.sign({ sub: data }, process.env.JWT_PRIVATE_KEY);
        return response.status(200).send({ message: "Token Generated", token });
    } catch (err) {
        return response.status(500).send({
            message: err.message || "Internal Server Error",
        })
    }
}

export default {
    generateToken,
}