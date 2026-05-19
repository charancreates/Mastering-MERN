import { users } from "../data/users.js";
import createError from "http-errors";

export const getUser = (req, res, next) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === Number(id));
  if (!user) {
    return next(createError(404, "no user brev! "));
  }
  res.json(user);
};
