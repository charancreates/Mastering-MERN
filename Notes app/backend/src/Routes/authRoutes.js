import Router from "router";
import { createNote } from "../controllers/noteControllers.js";
import { createUsers } from "../controllers/userControllers.js";

const authRouter = Router();

// authRouter.route("/login").post(createNote);
authRouter.route("/register").post(createUsers);

export default authRouter;
