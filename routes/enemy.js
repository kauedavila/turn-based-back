const router = require("express").Router();

const enemyController = require("../controllers/enemyController");

//POST /enemies
router.route("/enemies").post((req, res) => enemyController.create(req, res));

//GET /enemies
router.route("/enemies").get((req, res) => enemyController.getAll(req, res));
router.route("/enemies/:id").get((req, res) => enemyController.getById(req, res));

//DELETE /enemies/:id
router.route("/enemies/:id").delete((req, res) => enemyController.deleteById(req, res));

//PUT /enemies/:id
router.route("/enemies/:id").put((req, res) => enemyController.updateById(req, res));

module.exports = router;
