import Router from "express";
import { createAuthor, getAuthors } from "../controllers/authorControllers.js";

const authorRoutes = Router();

authorRoutes.route("/").get(getAuthors).post(createAuthor);

export default authorRoutes;
