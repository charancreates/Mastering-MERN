import { Router } from "express";
import { getUsers } from "../controllers/getUsers.js";
const router = Router();

router.route("/users").get(getUsers);

export default router;
