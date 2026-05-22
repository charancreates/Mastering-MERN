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
    if (!author) {
      return next(createError(404, "Author does not exist"));
    }
    res.json(author);
  } catch (error) {
    next(error);
  }
};
export const getAuthor = async (req, res, next) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) {
      return next(createError(404, "Author does not exist"));
    }
    res.json(author);
  } catch (error) {
    next(error);
  }
};
export const deleteAuthor = async (req, res, next) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);
    if (!author) {
      return next(createError(404, "Author does not exist"));
    }
    res.json("author deleted successffully");
  } catch (error) {
    next(error);
  }
};
