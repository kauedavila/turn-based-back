import mongoose from "mongoose";

const { Schema } = mongoose;

const characterSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    name: String,
    level: {
      type: Number,
      default: 1,
    },
    class: String,
    experience: {
      type: Number,
      default: 0,
    },
    health: {
      type: Number,
      default: 100,
    },
    attack: {
      type: Number,
      default: 10,
    },
    defense: {
      type: Number,
      default: 10,
    },
    speed: {
      type: Number,
      default: 10,
    },
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

export default Character;
