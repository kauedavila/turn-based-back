const { Character } = require("../models/Character");

const characterController = {
  create: async (req, res) => {
    try {
      const character = {
        name: req.body.name,
        level: req.body.level,
      };
      const response = await Character.create(character);

      res.status(201).json({ response, msg: "Character created successfully" });
    } catch (error) {
      res.status(400).send(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const characters = await Character.find();
      res.status(200).json(characters);
    } catch (error) {
      res.status(400).json({ error, msg: "Error while trying to get characters" });
    }
  },
};

module.exports = characterController;
