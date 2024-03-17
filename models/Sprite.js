const mongoose = require("mongoose");

const { Schema } = mongoose;

const spriteSchema = new Schema(
  {
    id: String,
    name: String,
    idle: String,
    attack: String,
    hit: String,
  },
  {
    timestamps: true,
  }
);

const Sprite = mongoose.model("Sprite", spriteSchema);

module.exports = {
  Sprite,
  spriteSchema,
};
