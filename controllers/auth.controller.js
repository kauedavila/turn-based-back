import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";

const authController = {
  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await UserModel.findOne({ email });

      if (!user) {
        return res.status(401).send({ auth: false, token: null, msg: "Invalid email or password" });
      }

      const passwordIsValid = bcrypt.compareSync(password, user.password);

      if (!passwordIsValid) {
        return res.status(401).send({ auth: false, token: null, msg: "Invalid email or password" });
      }

      res.status(200).json(user.password);
    } catch (error) {
      res.status(400).send({ error, msg: "Error login user" });
    }
  },
};

export default authController;
