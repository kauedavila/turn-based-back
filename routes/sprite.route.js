const router = require("express").Router();

const upload = require("../config/multer");

const spriteController = require("../controllers/sprite.controller");

router.route("/sprites").post(upload.single("src"), (req, res) => spriteController.create(req, res));

module.exports = router;
