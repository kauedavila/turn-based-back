const mongoose = require("mongoose");

const { Schema } = mongoose;

const stageSchema = new Schema({
  name: String,
  bg: String,
  enemyList: [
    {
      type: Schema.Types.ObjectId,
      ref: "Enemy",
    },
  ],
  boss: {
    type: Schema.Types.ObjectId,
    ref: "Enemy",
  },
});

const Stage = mongoose.model("Stage", stageSchema);

module.exports = {
  Stage,
  stageSchema,
};
