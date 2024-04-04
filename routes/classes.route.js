import express from "express";
import classesController from "../controllers/classes.controller.js";

const router = express.Router();

const { getAll, create } = classesController;

//GET /classes
router.get("/", getAll);

//POST /classes
router.post("/", create);

export default router;
