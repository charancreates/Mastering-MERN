import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: [10, "Title should be above 10 characters"],
  },
  genre: { type: String, required: true },
  price: {
    type: Number,
    required: true,
    min: [0, "price cannot be negative"],
  },
  author: { type: Schema.Types.ObjectId, ref: "Author" },
});

export const Book = mongoose.model("Book", bookSchema);
