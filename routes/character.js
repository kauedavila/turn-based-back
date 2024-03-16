const router = require("express").Router();

const characterController = require("../controllers/characterController");

router.route("/characters").post((req, res) => characterController.create(req, res));
router.route("/characters").get((req, res) => characterController.getAll(req, res));

module.exports = router;
