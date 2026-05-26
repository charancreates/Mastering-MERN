import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

export const Note = mongoose.model("Note", noteSchema);
