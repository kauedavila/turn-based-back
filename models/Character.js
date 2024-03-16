const mongoose = require("mongoose");

const { Schema } = mongoose;

const characterSchema = new Schema(
  {
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
