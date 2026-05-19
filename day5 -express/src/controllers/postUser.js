import { users } from "../data/users.js";

export const postUsers = (req, res) => {
  const id = users.length + 1;
  const newUser = { id, ...req.body };
  users.push(newUser);
  res.json(newUser);
};
