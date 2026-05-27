import Router from "router";
import { getUsers } from "../controllers/userControllers.js";
import { requireAuth } from "../middleware/requireAuth.js";

const userRouter = Router();

userRouter.route("/").get(requireAuth, getUsers);

export default userRouter;
