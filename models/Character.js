const mongoose = require("mongoose");

const { Schema } = mongoose;

const characterSchema = new Schema(
  {
    id: String,
    name: String,
    level: Number,
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