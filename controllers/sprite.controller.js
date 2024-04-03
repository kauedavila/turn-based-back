import SpriteModel from "../models/sprite.model.js";
import fs from "fs";

const spriteController = {
  getByClass: async (req, res) => {
    const folder = "./public/uploads/classes/" + req.params.class + "/";
    let filesResult = [];

    try {
      if (!fs.existsSync(folder)) {
        return res.status(404).send({ msg: "Class not found" });
      }

      fs.readdir(folder, (err, files) => {
        files.forEach((file) => {
          filesResult.push(file);
        });
        res.status(200).send({ filesResult });
      });
    } catch (error) {
      res.status(404).send({ error, msg: "Error getting sprites" });
    }
  },

  create: async (req, res) => {
    const file = req.file;
    try {
      const sprite = {
        name: req.body.type + "-" + req.body.subtype + "-" + file.filename,
        src: file.path,
        type: req.body.type,
        subtype: req.body.subtype,
      };

      const response = await SpriteModel.create(sprite);

      res.status(201).json({ response, msg: "Sprite created successfully" });
    } catch (error) {
      res.status(400).send({ error, msg: "Error creating sprite" });
    }
  },
};

export default spriteController;
