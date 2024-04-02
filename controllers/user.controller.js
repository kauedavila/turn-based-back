import UserModel from "../models/user.model.js";

const userController = {
  create: async (req, res) => {
    try {
      const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      };

      const response = await UserModel.create(user);

      res.status(201).json({ response, msg: "User created successfully" });
    } catch (error) {
      res.status(400).send({ error, msg: "Error creating user" });
    }
  },

  getById: async (req, res) => {
    try {
      const session = req.session;

      if (!session) {
        return res.status(404).json({ msg: "Session not found" });
      }

      const user = await UserModel.findById(session.id).populate("Character");

      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error, msg: "Error while trying to get user" });
    }
  },
};

export default userController;
