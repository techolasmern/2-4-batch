import express from "express";
import userController from "../controllers/user.controller.mjs";

const userRouter = express.Router();

userRouter.get("/status", userController.status);
userRouter.get("/", userController.getUsers);

export default userRouter;

// MVC -> Model View Controller