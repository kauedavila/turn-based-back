import express from "express";
import userController from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

const { create, getById } = userController;

//POST /users
router.post("/", create);

router.use(authMiddleware);

//GET /users/logged
router.get("/logged", getById);

export default router;
