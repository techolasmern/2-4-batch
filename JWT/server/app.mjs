import "dotenv/config";
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import authRouter from "./routes/auth.route.mjs";

const app = express();

app.use(express.json());
app.use(cors({ origin: process.env.ORIGIN_URL, methods: "*" }));
app.use(morgan("dev"));

app.use((req, res, next) => {
    console.log(req.headers.authorization.split(" ")[1]);
    next();
});

app.use("/api/auth", authRouter);

app.listen(process.env.PORT, () => {
    console.log(`🦖 Running PORT: ${process.env.PORT}`);
})