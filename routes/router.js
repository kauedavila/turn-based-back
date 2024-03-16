const router = require("express").Router();

//Character router
const characterRouter = require("./character");

router.use("/character", characterRouter);

module.exports = router;
