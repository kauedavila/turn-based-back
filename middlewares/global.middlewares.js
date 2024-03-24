import CharacterModel from "../models/character.model.js";
import mongoose from "mongoose";

export const validIdFormat = (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid id" });
  }
  next();
};

export const validateCharacterId = async (req, res, next) => {
  const { id } = req.params;

  const character = await CharacterModel.findById(id);

  if (!character) {
    return res.status(404).json({ message: "Character not found" });
  }

  req.character = character;
  next();
};
