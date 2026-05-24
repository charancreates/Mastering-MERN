import Router from "express";
import {
  createBook,
  delBook,
  getBook,
  getBooks,
  updateBook,
} from "../controllers/bookControllers.js";
import { requireAuth } from "../middleware/requireAuth.js";

const bookRoutes = Router();

bookRoutes.route("/").get(getBooks).post(requireAuth, createBook);
bookRoutes
  .route("/:id")
  .get(getBook)
  .delete(requireAuth, delBook)
  .put(requireAuth, updateBook);

export default bookRoutes;
