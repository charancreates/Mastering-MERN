import { Note } from "../models/noteSchema.js";

export const createNote = async (req, res, next) => {
  try {
    const note = await Note.create(req.body);
    res.json(note);
  } catch (error) {
    next(error);
  }
};

export const getNotes = async (req, res, next) => {
  try {
    const filter = {};
    const notes = await Note.find(filter).populate("user");
    res.json(notes);
  } catch (error) {
    next(error);
  }
};
