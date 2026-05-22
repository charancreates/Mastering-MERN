import Router from "express";
import {
  createBook,
  delBook,
  getBook,
  getBooks,
  updateBook,
} from "../controllers/bookControllers.js";

const bookRoutes = Router();

bookRoutes.route("/").get(getBooks).post(createBook);
bookRoutes.route("/:id").get(getBook).delete(delBook).put(updateBook);

export default bookRoutes;
