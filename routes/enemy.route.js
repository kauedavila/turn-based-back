import express from "express";
import enemyController from "../controllers/enemy.controller.js";

const router = express.Router();

const { create, getAll, getById, deleteById, updateById } = enemyController;

//POST /enemies
router.route("/").post((req, res) => create(req, res));

//GET /enemies
router.route("/").get((req, res) => getAll(req, res));
router.route("/:id").get((req, res) => getById(req, res));

//DELETE /enemies/:id
router.route("/:id").delete((req, res) => deleteById(req, res));

//PUT /enemies/:id
router.route("/:id").put((req, res) => updateById(req, res));

export default router;
