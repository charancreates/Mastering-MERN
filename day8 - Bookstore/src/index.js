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
import { Message } from "./models/messageSchema.js";

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

const onlineUsers = {};
io.on("connection", (socket) => {
  console.log("user connected", socket.id);

  socket.on("message", async (data) => {
    await Message.create({
      text: data.text,
      room: data.room,
      username: data.username,
    });
    io.to(data.room).emit("message", data.text);
  });

  socket.on("join", async (data) => {
    socket.join(data.room);

    onlineUsers[socket.id] = { username: data.username, room: data.room };
    io.emit("onlineUsers", onlineUsers);

    const messages = await Message.find({ room: data.room })
      .sort({ createdAt: -1 })
      .limit(20);
    socket.emit("history", messages);
  });

  socket.on("disconnect", () => {
    delete onlineUsers[socket.id];
    io.emit("onlineUsers", onlineUsers);
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
