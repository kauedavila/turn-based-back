import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const parts = authorization.split(" ");
  const [scheme, token] = parts;

  if (parts.length !== 2) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (scheme !== "Bearer") {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      req.session = decoded;
      return next();
    });
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
