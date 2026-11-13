import { Router } from "express";
import authController from "../controllers/auth.controller.mjs";

const authRouter = Router();

authRouter.post("/token/generate", authController.generateToken);
authRouter.get("/token/check", authController.checkToken);

export default authRouter;