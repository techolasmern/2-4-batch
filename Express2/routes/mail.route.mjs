import { Router } from "express";
import mailController from "../controllers/mail.controller.mjs";

const mailRouter = Router();

mailRouter.post("/send", mailController.sendMail);

export default mailRouter;