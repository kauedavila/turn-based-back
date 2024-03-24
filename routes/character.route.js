import express from "express";
import characterController from "../controllers/character.controller.js";
import { validIdFormat, validateCharacterId } from "../middlewares/global.middlewares.js";

const router = express.Router();

//POST /characters
router.post("/", characterController.create);

//GET /characters
router.get("/", characterController.getAll);
router.get("/:id", validIdFormat, validateCharacterId, characterController.getById);

//DELETE /characters/:id
router.delete("/:id", validIdFormat, validateCharacterId, characterController.deleteById);

//PUT /characters/:id
router.put("/:id", validIdFormat, validateCharacterId, characterController.updateById);

export default router;
