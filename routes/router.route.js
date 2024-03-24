import express from "express";
import characterRouter from "./character.route.js";
import enemyRouter from "./enemy.route.js";
import spriteRouter from "./sprite.route.js";
import stageRouter from "./stage.route.js";
import userRouter from "./user.route.js";

const router = express.Router();

//Users router
router.use("/users", userRouter);

//Character router
router.use("/characters", characterRouter);

//Enemy router
router.use("/enemies", enemyRouter);

//Sprite router
router.use("/sprites", spriteRouter);

//Stage router

router.use("/stages", stageRouter);

export default router;
