export const logger = (req, res, next) => {
  console.log(
    "METHOD = " +
      req.method +
      " | Url = " +
      req.url +
      " | Date/Time " +
      new Date().toISOString()
  );
  next();
};
