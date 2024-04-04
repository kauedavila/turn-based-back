import mongoose from "mongoose";

const { Schema } = mongoose;

const classSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    spriteFolder: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Class = mongoose.model("Class", classSchema);

export default Class;
