import mongoose, { Schema } from "mongoose";

const authorSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String },
});

export const Author = mongoose.model("Author", authorSchema);
