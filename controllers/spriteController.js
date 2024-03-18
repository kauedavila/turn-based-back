const { Sprite: SpriteModel } = require("../models/Sprite");

const spriteController = {
  create: async (req, res) => {
    const file = req.file;
    try {
      const sprite = {
        name: req.body.name,
        idle: file.path,
      };

      const response = await SpriteModel.create(sprite);

      res.status(201).json({ response, msg: "Sprite created successfully" });
    } catch (error) {
      res.status(400).send({ error, msg: "Error creating sprite" });
    }
  },
};

module.exports = spriteController;
