import { Note } from "../models/noteSchema.js";

export const createNote = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const note = await Note.create({ title, content, user: req.user.userId });
    res.json(note);
  } catch (error) {
    next(error);
  }
};

export const deleteNote = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ error: "Note id is required" });
    }
    const deletedNote = await Note.findOneAndDelete({
      _id: id,
      user: req.user.userId,
    });

    if (!deletedNote) {
      return res
        .status(404)
        .json({ error: "Note not found or you cannot delete it " });
    }
    res.json("deleted successfully");
  } catch (error) {
    next(error);
  }
};

export const getNotes = async (req, res, next) => {
  try {
    const notes = await Note.find({ user: req.user.userId }).populate("user");
    res.json(notes);
  } catch (error) {
    next(error);
  }
};
