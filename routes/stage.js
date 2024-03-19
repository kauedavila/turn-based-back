const router = require("express").Router();

const stageController = require("../controllers/stageController");

//POST /stages
router.route("/stages").post((req, res) => stageController.create(req, res));

//GET /stages
router.route("/stages").get((req, res) => stageController.getAll(req, res));
router.route("/stages/:id").get((req, res) => stageController.getById(req, res));

//DELETE /stages/:id
router.route("/stages/:id").delete((req, res) => stageController.deleteById(req, res));

//PUT /stages/:id
router.route("/stages/:id").put((req, res) => stageController.updateById(req, res));

module.exports = router;
