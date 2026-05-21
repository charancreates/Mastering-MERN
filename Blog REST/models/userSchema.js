import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: [true, "Name needed bro"] },
  email: String,
});

export const User = mongoose.model("User", userSchema);
