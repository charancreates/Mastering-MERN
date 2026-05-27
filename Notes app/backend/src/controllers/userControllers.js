import { User } from "../models/userschema.js";
import createError from "http-errors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const createUsers = async (req, res, next) => {
  try {
    const { password, name, email } = req.body;
    const hashedpass = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedpass });
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });
    res.json({ name: name, email: email, token });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const success = await bcrypt.compare(password, user.password);
    if (success) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "7d",
      });
      res.json({ name: user.name, email: user.email, token });
    } else {
      res.status(401).json({ error: "wrong id or password" });
    }
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
};
