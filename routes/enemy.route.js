import express from "express";
import enemyController from "../controllers/enemy.controller.js";

const router = express.Router();

//POST /enemies
router.route("/").post((req, res) => enemyController.create(req, res));

//GET /enemies
router.route("/").get((req, res) => enemyController.getAll(req, res));
router.route("/:id").get((req, res) => enemyController.getById(req, res));

//DELETE /enemies/:id
router.route("/:id").delete((req, res) => enemyController.deleteById(req, res));

//PUT /enemies/:id
router.route("/:id").put((req, res) => enemyController.updateById(req, res));

export default router;
