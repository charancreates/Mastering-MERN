import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../models/userSchema.js";
import "dotenv/config";

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const hashedpass = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedpass });
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.json({ name: user.name, email: user.email, token });
  } catch (error) {
    return next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const success = await bcrypt.compare(password, user.password);
    if (success) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      res.json({ name: user.name, email: user.email, token });
    } else {
      res.status(401).json({ error: "wrong id or password" });
    }
  } catch (error) {
    return next(error);
  }
};
