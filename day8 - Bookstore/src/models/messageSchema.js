import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema({
  text: { type: String, required: true },
  room: String,
  createdAt: { type: Date, default: Date.now },
  username: { type: String, required: true },
});
export const Message = mongoose.model("Message", messageSchema);
