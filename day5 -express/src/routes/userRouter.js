import { Router } from "express";
import { getUsers } from "../controllers/getUsers.js";
import { postUsers } from "../controllers/postUser.js";
import { getUser } from "../controllers/getUser.js";
import { deleteUser } from "../controllers/deleteUser.js";
const router = Router();

router.route("/users").get(getUsers).post(postUsers);
router.route("/users/:id").get(getUser).delete(deleteUser);

export default router;
