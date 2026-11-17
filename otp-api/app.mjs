import "dotenv/config";
import express from 'express';
import cors from "cors";
import otpRouter from "./routes/otp.router.mjs";
import { createDBConnection } from "./config/db.config.mjs";

await createDBConnection();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/otp", otpRouter);

app.listen(process.env.port, () => {
    console.log(`Server is running on port ${process.env.port}`);
})