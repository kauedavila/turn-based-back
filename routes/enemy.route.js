import express from "express";
import enemyController from "../controllers/enemy.controller.js";

const router = express.Router();

const { create, getAll, getById, deleteById, updateById } = enemyController;

//POST /enemies
router.route("/").post((req, res) => create(req, res));

//GET /enemies
router.get("/", getAll);
router.get("/:id", getById);

//DELETE /enemies/:id
router.delete("/:id", deleteById);

//PUT /enemies/:id
router.put("/:id", updateById);

export default router;
