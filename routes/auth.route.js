import express from "express";
import authController from "../controllers/auth.controller.js";

const router = express.Router();

const { login } = authController;

//POST /auth
router.post("/", login);

export default router;
