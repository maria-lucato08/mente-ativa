import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

export function authMiddleware(req, res) {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ message: "Token não encontrado" });

  try {
    const decoded = jwt.verify(token.split(" ")[1], SECRET);
    return { user: decoded };
  } catch {
    throw new Error("Token inválido");
  }
}

export const SECRET_KEY = SECRET;