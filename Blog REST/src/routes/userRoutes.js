import router from "express";
import { createUser } from "../controllers/postControllers.js";

const userRoutes = router();

userRoutes.route("/").post(createUser);

export default userRoutes;
