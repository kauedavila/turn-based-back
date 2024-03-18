const mongoose = require("mongoose");

const { Schema } = mongoose;

const spriteSchema = new Schema(
  {
    name: String,
    idle: String,
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
