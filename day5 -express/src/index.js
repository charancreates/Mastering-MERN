import express from "express";
import createError from "http-errors";
import userRouter from "./routes/userRouter.js";

const app = express();
const port = 3000;

app.use(express.json());

//logger middleware
app.use((req, res, next) => {
  console.log(
    "Method = " +
      req.method +
      ' | Url = "' +
      req.url +
      '"' +
      " | Date/Time = " +
      new Date().toISOString()
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Homepage");
});

//api header
app.use((req, res, next) => {
  const apikey = req.headers["x-api-key"];
  if (!apikey) {
    return next(createError(401, "no api key"));
  }
  next();
});

app.use(userRouter);

app.route("/users").post((req, res) => {
  const id = users.length + 1;
  const newUser = { id, ...req.body };
  users.push(newUser);
  res.json(newUser);
});

app
  .route("/users/:id")
  .get((req, res, next) => {
    const id = req.params.id;
    const user = users.find((user) => user.id === Number(id));
    if (!user) {
      return next(createError(404, "No users brev!"));
    }
    res.json(user);
  })
  .delete((req, res) => {
    const id = req.params.id;
    users = users.filter((user) => user.id !== Number(id));
    res.json(users);
  });

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message });
});

app.listen(port, () => {
  console.log("Server is running brev!");
});
