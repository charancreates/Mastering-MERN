import { users } from "../data/users.js";

export const deleteUser = (req, res) => {
  const id = req.params.id;
  const index = users.findIndex((user) => user.id === Number(id));
  users.splice(index, 1);
  res.json(users);
};
