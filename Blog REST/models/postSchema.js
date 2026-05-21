import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, "Why no title"],
    minLength: [3, "Title should be more than 3 chars"],
  },
  content: {
    type: String,
    required: [true, "Why no Content"],
    minLength: [10, "Content should be more than 10 chars"],
  },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  isPublished: { type: Boolean, default: false },
});

export const Post = mongoose.model("Post", postSchema);
