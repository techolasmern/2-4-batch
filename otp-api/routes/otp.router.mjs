import { Router } from "express";
import otpController from "../controllers/otp.controller.mjs";

const otpRouter = Router();

otpRouter.post("/send", otpController.handleSendOTP);
otpRouter.patch("/verify", otpController.handleVerifyOTP);
otpRouter.patch("/resend", otpController.resendOTP);

export default otpRouter;