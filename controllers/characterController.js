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
      res.status(400).send({ error, msg: "Error creating character" });
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

      if (!character) {
        return res.status(404).json({ msg: "Character not found" });
      }

      res.status(200).json(character);
    } catch (error) {
      res.status(400).json({ error, msg: "Error while trying to get character" });
    }
  },

  deleteById: async (req, res) => {
    try {
      const id = req.params.id;
      const character = await CharacterModel.findById(id);

      if (!character) {
        return res.status(404).json({ msg: "Character not found" });
      }

      const deleteCharacter = await CharacterModel.findByIdAndDelete(id);

      if (!deleteCharacter) {
        return res.status(400).json({ msg: "Error while trying to delete character" });
      }

      res.status(200).json({ deleteCharacter, msg: "Character deleted successfully" });
    } catch (error) {
      res.status(400).json({ error, msg: "Error while trying to delete character" });
    }
  },

  updateById: async (req, res) => {
    try {
      const id = req.params.id;
      const character = {
        name: req.body.name,
        level: req.body.level,
      };
      const updatedCharacter = await CharacterModel.findByIdAndUpdate(id, character);

      if (!updatedCharacter) {
        return res.status(400).json({ msg: "Error while trying to update character" });
      }
      res.status(200).json({ updatedCharacter, msg: "Character updated successfully" });
    } catch (error) {
      res.status(400).json({ error, msg: "Error while trying to get character" });
    }
  },
};

module.exports = characterController;
