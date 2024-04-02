import express from "express";
import spriteController from "../controllers/sprite.controller.js";
import upload from "../config/multer.js";

const { create } = spriteController;

const router = express.Router();

router.route("/").post(upload.single("src"), (req, res) => create(req, res));

export default router;
