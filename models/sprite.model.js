import mongoose from "mongoose";

const { Schema } = mongoose;

const spriteSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    src: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    subtype: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Sprite = mongoose.model("Sprite", spriteSchema);

export default Sprite;
