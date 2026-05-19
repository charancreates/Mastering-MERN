import express from "express";
import createError from "http-errors";
import userRouter from "./routes/userRouter.js";
import { logger } from "./middleware/logger.js";
import { apiChecker } from "./middleware/apiChecker.js";
import { errorFound } from "./middleware/errorfound.js";

const app = express();
const port = 3000;

app.use(express.json());

//logger middleware
app.use(logger);

app.get("/", (req, res) => {
  res.send("Homepage");
});

//api header
app.use(apiChecker);

app.use(userRouter);

//error handler middleware
app.use(errorFound);

app.listen(port, () => {
  console.log("Server is running brev!");
});
