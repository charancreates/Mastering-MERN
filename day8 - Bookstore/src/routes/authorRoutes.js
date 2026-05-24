import Router from "express";
import {
  createAuthor,
  deleteAuthor,
  getAuthor,
  getAuthors,
  updateAuthor,
} from "../controllers/authorControllers.js";
import { requireAuth } from "../middleware/requireAuth.js";

const authorRoutes = Router();

authorRoutes.route("/").get(getAuthors).post(requireAuth, createAuthor);
authorRoutes
  .route("/:id")
  .get(getAuthor)
  .put(requireAuth, updateAuthor)
  .delete(requireAuth, deleteAuthor);

export default authorRoutes;
