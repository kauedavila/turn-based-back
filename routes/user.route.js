import express from "express";
import userController from "../controllers/user.controller.js";
import { validIdFormat, validateCharacterId } from "../middlewares/global.middleware.js";

const router = express.Router();

//POST /users
router.post("/", userController.create);

//GET /users
router.get("/:id", validIdFormat, userController.getById);

export default router;
