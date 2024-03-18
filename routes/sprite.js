const router = require("express").Router();

const upload = require("../config/multer");

const spriteController = require("../controllers/spriteController");

router.route("/sprites").post(upload.single("file"), (req, res) => spriteController.create(req, res));

module.exports = router;
