const router = require("express").Router();

const upload = require("../config/multer");

const spriteController = require("../controllers/spriteController");

router.post("/sprites", upload.single("file"), spriteController.create);

module.exports = router;
