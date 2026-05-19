export const logger = (req, res, next) => {
  console.log(
    "Method = " +
      req.method +
      " | Link = " +
      req.url +
      " | Date/Time = " +
      new Date().toISOString()
  );
  next();
};
