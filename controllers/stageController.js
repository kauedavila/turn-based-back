const { Stage: StageModel } = require("../models/Stage");

const stageController = {
  create: async (req, res) => {
    try {
      const stage = {
        name: req.body.name,
        bg: req.body.bg,
        enemyList: req.body.enemyList,
        boss: req.body.boss,
      };

      const response = await StageModel.create(stage);

      res.status(201).json({ response, msg: "Stage created successfully" });
    } catch (error) {
      res.status(400).send({ error, msg: "Error creating stage" });
    }
  },

  getAll: async (req, res) => {
    try {
      const stages = await StageModel.find();
      res.status(200).json(stages);
    } catch (error) {
      res.status(400).json({ error, msg: "Error while trying to get stages" });
    }
  },

  getById: async (req, res) => {
    try {
      const id = req.params.id;
      const stage = await StageModel.findById(id);

      if (!stage) {
        return res.status(404).json({ msg: "Stage not found" });
      }

      res.status(200).json(stage);
    } catch (error) {
      res.status(400).json({ error, msg: "Error while trying to get stage" });
    }
  },

  deleteById: async (req, res) => {
    try {
      const id = req.params.id;
      const stage = await StageModel.findById(id);

      if (!stage) {
        return res.status(404).json({ msg: "Stage not found" });
      }

      const deleteStage = await StageModel.findByIdAndDelete(id);

      if (!deleteStage) {
        return res.status(400).json({ msg: "Error while trying to delete stage" });
      }

      res.status(200).json({ deleteStage, msg: "Stage deleted successfully" });
    } catch (error) {
      res.status(400).json({ error, msg: "Error while trying to delete stage" });
    }
  },

  updateById: async (req, res) => {
    try {
      const id = req.params.id;
      const stage = {
        name: req.body.name,
        bg: req.body.bg,
        enemyList: req.body.enemyList,
        boss: req.body.boss,
      };
      const updatedStage = await StageModel.findByIdAndUpdate(id, stage);

      if (!updatedStage) {
        return res.status(400).json({ msg: "Error while trying to update stage" });
      }
      res.status(200).json({ updatedStage, msg: "Stage updated successfully" });
    } catch (error) {
      res.status(400).json({ error, msg: "Error while trying to get stage" });
    }
  },
};

module.exports = stageController;
