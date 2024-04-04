import ClassesModel from "../models/classes.model.js";

const classesController = {
  create: async (req, res) => {
    try {
      const classCreate = req.body;

      const response = await ClassesModel.create(classCreate);

      res.status(201).json({ response, msg: "Class created successfully" });
    } catch (error) {
      res.status(400).send({ error, msg: "Error creating classes" });
    }
  },

  getAll: async (req, res) => {
    try {
      const classes = await ClassesModel.find();

      res.status(200).json(classes);
    } catch (error) {
      res.status(400).json({ error, msg: "Error while trying to get classes" });
    }
  },
};

export default classesController;
