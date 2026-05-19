import "dotenv/config";
import express from "express";
import { logger } from "./middleware/logger.js";
import postRoutes from "./routes/postRoutes.js";
import { errorFound } from "../../day5 -express/src/middleware/errorfound.js";

const app = express();

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Blog homepage");
});

app.use(express.json());

app.use(logger);

app.use("/posts", postRoutes);

app.use(errorFound);

app.listen(port, () => {
  console.log("server is running");
});
