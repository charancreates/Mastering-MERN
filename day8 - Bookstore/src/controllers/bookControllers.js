import { Book } from "../models/bookSchema.js";
import createError from "http-errors";

export const getBooks = async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.genre) {
      filter.genre = req.query.genre;
    }
    if (req.query.author) {
      filter.author = req.query.author;
    }
    const books = await Book.find(filter).populate("author");
    res.json(books);
  } catch (error) {
    next(error);
  }
};

export const getBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id).populate("author");
    if (!book) {
      return next(createError(404, "Book does not exist"));
    }
    res.json(book);
  } catch (error) {
    next(error);
  }
};

export const delBook = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return next(createError(404, "Book does not exist"));
    }
    res.json("deleted the book successfully");
  } catch (error) {
    next(error);
  }
};

export const updateBook = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });
    if (!book) {
      return next(createError(404, "Book does not exist"));
    }
    res.json(book);
  } catch (error) {
    next(error);
  }
};

export const createBook = async (req, res, next) => {
  try {
    const book = await Book.create(req.body);
    res.json(book);
  } catch (error) {
    next(error);
  }
};
