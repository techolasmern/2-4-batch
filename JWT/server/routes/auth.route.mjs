import { Router } from "express";
import authController from "../controllers/auth.controller.mjs";
import authMiddleware from "../middlewares/auth.middleware.mjs";

const authRouter = Router();

authRouter.post("/token/generate", authController.generateToken);
authRouter.get("/token/check", authMiddleware.auth, authController.checkToken);

export default authRouter;