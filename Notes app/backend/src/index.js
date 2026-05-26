import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import authRouter from "./Routes/authRoutes.js";
import userRouter from "./Routes/userRoutes.js";
import NoteRouter from "./Routes/noteRoutes.js";
import logger from "./middleware/logger.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database is connected");
  } catch (error) {
    console.error(error, "Database isn't connected");
    process.exit(1);
  }
};
ConnectDB();

app.get("/", (req, res) => {
  res.send("Notes App Homepage");
});

app.use("/auth/", authRouter);
app.use("/notes", NoteRouter);
app.use("/users", userRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log("server is connected");
});
