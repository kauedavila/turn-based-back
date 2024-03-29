import express from "express";
import authController from "../controllers/auth.controller.js";

const router = express.Router();

//POST /auth
router.post("/", authController.login);

export default router;
