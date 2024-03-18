const mongoose = require("mongoose");

const { Schema } = mongoose;

const characterSchema = new Schema(
  {
    name: String,
    level: Number,
    class: String,
    experience: Number,
    health: Number,
    attack: Number,
    defense: Number,
    speed: Number,
    moves: [
      {
        name: String,
        level: Number,
      },
    ],
    sprite: String,
  },
  {
    timestamps: true,
  }
);

const Character = mongoose.model("Character", characterSchema);

module.exports = {
  Character,
  characterSchema,
};
