import express from "express";
import stageController from "../controllers/stage.controller.js";

const { create, getAll, getById, deleteById, updateById } = stageController;

const router = express.Router();

//POST /stages
router.post("/", create);

//GET /stages
router.get("/", getAll);
router.get("/:id", getById);

//DELETE /stages/:id
router.delete("/:id", deleteById);

//PUT /stages/:id
router.put("/:id", updateById);

export default router;
