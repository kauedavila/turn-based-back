import express from "express";
import spriteController from "../controllers/sprite.controller.js";

const { getByClass } = spriteController;

const router = express.Router();

//GET /sprites
router.get("/:class", getByClass);

export default router;
