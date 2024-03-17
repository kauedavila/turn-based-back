const { Sprite } = require("../models/Sprite");

const spriteController = {
  create: async (req, res) => {
    try {
      const { name } = req.body;
      const file = req.file;

      const picture = new Sprite({
        name,
        idle: file.path,
      });

      const response = await picture.save();

      res.status(201).json({ response, msg: "Sprite created successfully" });
    } catch (error) {
      res.status(400).send(error);
    }
  },
};

module.exports = spriteController;
