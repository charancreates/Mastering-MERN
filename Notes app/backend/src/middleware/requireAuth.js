import jwt from "jsonwebtoken";
import "dotenv/config";

export const requireAuth = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) {
    return res.status(401).json({ error: "no auth header" });
  }
  const part = header.split(" ");
  const token = part[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
  // next();
};
