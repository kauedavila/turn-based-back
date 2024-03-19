const router = require("express").Router();

//Character router
const characterRouter = require("./character");

router.use("/", characterRouter);

//Enemy router
const enemyRouter = require("./enemy");

router.use("/", enemyRouter);

//Sprite router
const spriteRouter = require("./sprite");

router.use("/", spriteRouter);

//Stage router

const stageRouter = require("./stage");

router.use("/", stageRouter);

module.exports = router;
