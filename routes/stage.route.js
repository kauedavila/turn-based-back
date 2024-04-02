import express from "express";
import stageController from "../controllers/stage.controller.js";

const { create, getAll, getById, deleteById, updateById } = stageController;

const router = express.Router();

//POST /stages
router.route("/").post((req, res) => create(req, res));

//GET /stages
router.route("/").get((req, res) => getAll(req, res));
router.route("/:id").get((req, res) => getById(req, res));

//DELETE /stages/:id
router.route("/:id").delete((req, res) => deleteById(req, res));

//PUT /stages/:id
router.route("/:id").put((req, res) => updateById(req, res));

export default router;
