import express from "express";
import userController from "../controllers/user.controller.js";
import { validIdFormat, validateCharacterId } from "../middlewares/global.middleware.js";

const router = express.Router();

const { create, getById } = userController;

//POST /users
router.post("/", create);

//GET /users
router.get("/:id", validIdFormat, getById);

export default router;
