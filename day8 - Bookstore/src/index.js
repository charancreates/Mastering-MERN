import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import bookRoutes from "./routes/bookRoutes.js";
import authorRoutes from "./routes/authorRoutes.js";
import { logger } from "./middleware/logger.js";
import { errorHandler } from "./middleware/errorHandler.js";
import cors from "cors";
import authRouter from "./routes/authRoutes.js";
import { requireAuth } from "./middleware/requireAuth.js";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

const port = process.env.PORT || 3000;

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Database");
  } catch (error) {
    console.error("MongoDB not connected", error);
    process.exit(1);
  }
};

ConnectDB();
app.use(express.json());
app.use(logger);
app.get("/", (req, res) => {
  res.send("Bookstore homepage");
});

app.use("/auth", authRouter);
app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log("server is running");
});
