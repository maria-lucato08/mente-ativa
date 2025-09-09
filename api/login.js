import prisma from "./prisma.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { applyCors } from "./_cors";

const SECRET = process.env.JWT_SECRET;

export default async function handler(req, res) {
  try {
    // aplica CORS
    if (applyCors(req, res)) return;

    if (req.method !== "POST") {
      return res.status(405).json({ message: "Método não permitido" });
    }

    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email e senha são obrigatórios" });
    }

    const user = await prisma.cadastroUsers.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ message: "Usuário não encontrado" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: "Senha incorreta" });

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: "1h" });

    return res.status(200).json({
      message: "Login realizado com sucesso",
      token,
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Erro interno", error: err.message });
  }
}
