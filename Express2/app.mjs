import "dotenv/config";
import express from "express";
import apiRouter from "./routes/api.route.mjs";
import userRouter from "./routes/user.route.mjs";

const app = express();

app.use(express.json());

app.use("/api", apiRouter);
app.use("/users", userRouter);

app.listen(process.env.PORT ?? 3000, () => {
    console.log(`Server running on port ${process.env.PORT ?? 3000}`);
});