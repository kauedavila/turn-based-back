import mongoose from "mongoose";

const { Schema } = mongoose;

const enemySchema = new Schema(
  {
    name: String,
    level: Number,
    class: String,
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

const Enemy = mongoose.model("Enemy", enemySchema);

export default Enemy;
