import "dotenv/config";
import jwt from "jsonwebtoken";

const ERR_MSG = "You don't have access to this resource";

const auth = (request, response, next) => {
    try {
        const authorization = request.headers.authorization;
        if (!authorization) {
            throw new Error();
        }
        const [tokenType, tokenValue] = authorization.split(" ");
        if (tokenType !== "Bearer") {
            throw new Error();
        }
        try {
            const decoded = jwt.verify(tokenValue, process.env.JWT_PRIVATE_KEY);
            if (!decoded) {
                throw new Error();
            }
            next();
        } catch (err) {
            return response.status(401).send({ message: ERR_MSG });
        }
    } catch (err) {
        return response.status(err.message ? 500 : 401).send({ message: err.message || ERR_MSG });
    }
}

export default { auth };