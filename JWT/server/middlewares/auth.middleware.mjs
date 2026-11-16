import "dotenv/config";
import jwt from "jsonwebtoken";

const ERR_MSG = "You don't have access to this resource";

const auth = (request, response, next) => {
    try {
        const authorization = request.headers.authorization;
        if (!authorization) {
            return response.status(401).send({ message: ERR_MSG });
        }
        const [tokenType, tokenValue] = authorization.split(" ");
        if (tokenType !== "Bearer") {
            return response.status(401).send({ message: ERR_MSG });
        }
        try {
            const decoded = jwt.verify(tokenValue, process.env.JWT_PRIVATE_KEY);
            if (!decoded) {
                return response.status(401).send({ message: ERR_MSG });
            }
            next();
        } catch (err) {
            return response.status(401).send({ message: ERR_MSG });
        }
    } catch (err) {
        return response.status(500).send({ message: err.message || "Internal Server Error" });
    }
}

export default { auth };