import { Author } from "../models/authorSchema.js";
import createError from "http-errors";

export const getAuthors = async (req, res, next) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (error) {
    next(error);
  }
};
export const createAuthor = async (req, res, next) => {
  try {
    const author = await Author.create(req.body);
    res.json(author);
  } catch (error) {
    next(error);
  }
};
export const updateAuthor = async (req, res, next) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });
    res.json(author);
  } catch (error) {
    next(error);
  }
};
