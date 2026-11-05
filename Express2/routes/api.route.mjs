import express from "express";
import apiController from "../controllers/api.controller.mjs";

const apiRouter = express.Router();

apiRouter.get("/status", apiController.status);

export default apiRouter;