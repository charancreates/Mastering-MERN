import Router from "router";
import { getUsers } from "../controllers/userControllers.js";

const userRouter = Router();

userRouter.route("/").get(getUsers);

export default userRouter;
