import createError from "http-errors";

export const apiChecker = (req, res, next) => {
  const apikey = req.headers["x-api-key"];
  if (!apikey) {
    return next(createError(401, "no api key"));
  }
  next();
};
