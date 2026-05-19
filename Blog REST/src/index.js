import "dotenv/config";
import express from "express";
import { logger } from "./middleware/logger.js";
import postRoutes from "./routes/postRoutes.js";
import { handleError } from "./middleware/handleError.js";

const app = express();

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
