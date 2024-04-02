import express from "express";
import stageController from "../controllers/stage.controller.js";

const router = express.Router();

//POST /stages
router.route("/").post((req, res) => stageController.create(req, res));

//GET /stages
router.route("/").get((req, res) => stageController.getAll(req, res));
router.route("/:id").get((req, res) => stageController.getById(req, res));

//DELETE /stages/:id
router.route("/:id").delete((req, res) => stageController.deleteById(req, res));

//PUT /stages/:id
router.route("/:id").put((req, res) => stageController.updateById(req, res));

export default router;
