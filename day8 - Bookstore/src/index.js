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
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

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

io.on("connection", (socket) => {
  console.log("user connected", socket.id);

  socket.on("message", (data) => {
    io.to(data.room).emit("message", data.text);
  });

  socket.on("join", (data) => {
    socket.join(data);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});

app.use("/auth", authRouter);
app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);

app.use(errorHandler);

httpServer.listen(port, () => {
  console.log("server is running");
});
