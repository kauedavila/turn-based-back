import express from "express";
import characterController from "../controllers/character.controller.js";
import { validIdFormat, validateCharacterId } from "../middlewares/global.middleware.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

const { create, getAll, getById, deleteById, updateById } = characterController;

//POST /characters
router.post("/", authMiddleware, create);

//GET /characters
router.get("/", getAll);
router.get("/:id", validIdFormat, validateCharacterId, getById);

//DELETE /characters/:id
router.delete("/:id", validIdFormat, validateCharacterId, deleteById);

//PUT /characters/:id
router.put("/:id", validIdFormat, validateCharacterId, updateById);

export default router;
