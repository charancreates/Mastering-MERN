import Router from "express";
import {
  createAuthor,
  deleteAuthor,
  getAuthor,
  getAuthors,
  updateAuthor,
} from "../controllers/authorControllers.js";

const authorRoutes = Router();

authorRoutes.route("/").get(getAuthors).post(createAuthor);
authorRoutes
  .route("/:id")
  .put(updateAuthor)
  .get(getAuthor)
  .delete(deleteAuthor);

export default authorRoutes;
