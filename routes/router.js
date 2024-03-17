const router = require("express").Router();

//Character router
const characterRouter = require("./character");

router.use("/", characterRouter);

//Sprite router
const spriteRouter = require("./sprite");

router.use("/", spriteRouter);

module.exports = router;
