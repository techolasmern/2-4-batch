import { Router } from "express";
import otpController from "../controllers/otp.controller.mjs";

const otpRouter = Router();

otpRouter.post("/send", otpController.handleSendOTP);
otpRouter.post("/verify", otpController.handleVerifyOTP);

export default otpRouter;