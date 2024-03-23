const router = require("express").Router();

const characterController = require("../controllers/character.controller");

//POST /characters
router.route("/characters").post((req, res) => characterController.create(req, res));

//GET /characters
router.route("/characters").get((req, res) => characterController.getAll(req, res));
router.route("/characters/:id").get((req, res) => characterController.getById(req, res));

//DELETE /characters/:id
router.route("/characters/:id").delete((req, res) => characterController.deleteById(req, res));

//PUT /characters/:id
router.route("/characters/:id").put((req, res) => characterController.updateById(req, res));

module.exports = router;
