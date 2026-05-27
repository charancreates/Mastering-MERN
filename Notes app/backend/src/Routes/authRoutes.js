import Router from "router";
import { createUsers, loginUser } from "../controllers/userControllers.js";

const authRouter = Router();

authRouter.route("/login").post(loginUser);
authRouter.route("/register").post(createUsers);

export default authRouter;
