import prisma from "./prisma.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const SECRET = process.env.JWT_SECRET;

export default async function handler(req, res) {
  // ======== CORS ========
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173"); // seu frontend
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // responder preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { email, password } = req.body;

  try {
    const user = await prisma.cadastroUsers.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "Usuário não encontrado" });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ message: "Senha incorreta" });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json({
      message: "Login realizado com sucesso",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Erro no login", error: err.message });
  }
}
