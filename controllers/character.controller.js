import CharacterModel from "../models/character.model.js";

const characterController = {
  create: async (req, res) => {
    try {
      const character = {
        name: req.body.name,
        level: req.body.level,
        class: req.body.class,
        experience: 0,
        health: req.body.health,
        attack: req.body.attack,
        defense: req.body.defense,
        speed: req.body.speed,
        moves: req.body.moves,
        sprite: req.body.sprite,
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
      const character = req.character;

      res.status(200).json(character);
    } catch (error) {
      res.status(400).json({ error, msg: "Error while trying to get character" });
    }
  },

  deleteById: async (req, res) => {
    try {
      const { _id: id } = req.character;

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
      const { _id: id } = req.character;

      const character = {
        name: req.body.name,
        level: req.body.level,
        class: req.body.class,
        experience: req.body.experience,
        health: req.body.health,
        attack: req.body.attack,
        defense: req.body.defense,
        speed: req.body.speed,
        moves: req.body.moves,
        sprite: req.body.sprite,
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

export default characterController;
