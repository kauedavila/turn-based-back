const router = require("express").Router();

//Character router
const characterRouter = require("./character.route");

router.use("/", characterRouter);

//Enemy router
const enemyRouter = require("./enemy.route");

router.use("/", enemyRouter);

//Sprite router
const spriteRouter = require("./sprite.route");

router.use("/", spriteRouter);

//Stage router

const stageRouter = require("./stage.route");

router.use("/", stageRouter);

module.exports = router;
