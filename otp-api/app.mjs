import "dotenv/config";
import express from 'express';
import cors from "cors";
import otpRouter from "./routes/otp.router.mjs";
import { createDBConnection } from "./config/db.config.mjs";
import { errorHandler } from "./middlewares/error.middleware.mjs";
import { createError } from "./utils/error.utils.mjs";

await createDBConnection();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/otp", otpRouter);

app.use((_request, _response, next) => {
    next(createError("The requested route does not exist.", 404));
});

app.use((error, request, response, next) => {
    return errorHandler(error, request, response, next);
});

app.listen(process.env.port, () => {
    console.log(`Server is running on port ${process.env.port}`);
})