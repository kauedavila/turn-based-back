const { Enemy: EnemyModel } = require("../models/Enemy");

const enemyController = {
  create: async (req, res) => {
    try {
      const enemy = {
        name: req.body.name,
        level: req.body.level,
        class: req.body.class,
        health: req.body.health,
        attack: req.body.attack,
        defense: req.body.defense,
        speed: req.body.speed,
        moves: req.body.moves,
        sprite: req.body.sprite,
      };

      const response = await EnemyModel.create(enemy);

      res.status(201).json({ response, msg: "Enemy created successfully" });
    } catch (error) {
      res.status(400).send({ error, msg: "Error creating enemy" });
    }
  },

  getAll: async (req, res) => {
    try {
      const enemies = await EnemyModel.find();
      res.status(200).json(enemies);
    } catch (error) {
      res.status(400).json({ error, msg: "Error while trying to get enemies" });
    }
  },

  getById: async (req, res) => {
    try {
      const id = req.params.id;
      const enemy = await EnemyModel.findById(id);

      if (!enemy) {
        return res.status(404).json({ msg: "Enemy not found" });
      }

      res.status(200).json(enemy);
    } catch (error) {
      res.status(400).json({ error, msg: "Error while trying to get enemy" });
    }
  },

  deleteById: async (req, res) => {
    try {
      const id = req.params.id;
      const enemy = await EnemyModel.findById(id);

      if (!enemy) {
        return res.status(404).json({ msg: "Enemy not found" });
      }

      const deleteEnemy = await EnemyModel.findByIdAndDelete(id);

      if (!deleteEnemy) {
        return res.status(400).json({ msg: "Error while trying to delete enemy" });
      }

      res.status(200).json({ deleteEnemy, msg: "Enemy deleted successfully" });
    } catch (error) {
      res.status(400).json({ error, msg: "Error while trying to delete enemy" });
    }
  },

  updateById: async (req, res) => {
    try {
      const id = req.params.id;
      const enemy = {
        name: req.body.name,
        level: req.body.level,
        class: req.body.class,
        health: req.body.health,
        attack: req.body.attack,
        defense: req.body.defense,
        speed: req.body.speed,
        moves: req.body.moves,
        sprite: req.body.sprite,
      };
      const updatedEnemy = await EnemyModel.findByIdAndUpdate(id, enemy);

      if (!updatedEnemy) {
        return res.status(400).json({ msg: "Error while trying to update enemy" });
      }
      res.status(200).json({ updatedEnemy, msg: "Enemy updated successfully" });
    } catch (error) {
      res.status(400).json({ error, msg: "Error while trying to get enemy" });
    }
  },
};

module.exports = enemyController;
