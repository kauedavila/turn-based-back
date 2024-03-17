const { Character: CharacterModel } = require("../models/Character");

const characterController = {
  create: async (req, res) => {
    try {
      const character = {
        name: req.body.name,
        level: req.body.level,
      };
      const response = await CharacterModel.create(character);
      res.status(201).json({ response, msg: "Character created successfully" });
    } catch (error) {
      res.status(400).send(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const characters = await CharacterModel.find();
      res.status(200).json(characters);
    } catch (error) {
      res.status(400).json({ error, msg: "Error while trying to get characters" });
    }
  },

  getById: async (req, res) => {
    try {
      const id = req.params.id;
      const character = await CharacterModel.findById(id);
      res.status(200).json(character);
    } catch (error) {
      res.status(400).json({ error, msg: "Error while trying to get character" });
    }
  },
};

module.exports = characterController;
