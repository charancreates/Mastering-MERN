import "dotenv/config";
import express from "express";
import { logger } from "./middleware/logger.js";
import postRoutes from "./routes/postRoutes.js";
import { handleError } from "./middleware/handleError.js";
import mongoose from "mongoose";

const app = express();

// mongoose.connect(process.env.MONGO_URI);
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database is connected");
  } catch (err) {
    console.error("Mongo DB connection error", err);
    process.exit(1);
  }
}

connectDB();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Blog homepage");
});

app.use(logger);

app.use("/posts", postRoutes);

app.use(handleError);

app.listen(port, () => {
  console.log("server is running");
});
