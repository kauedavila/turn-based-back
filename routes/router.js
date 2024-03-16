const router = require("express").Router();

//Character router
const characterRouter = require("./character");

router.use("/", characterRouter);

module.exports = router;
