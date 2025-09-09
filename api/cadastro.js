import prisma from "./prisma.js";
import bcrypt from "bcrypt";
import { applyCors } from "./_cors";

export default async function handler(req, res) {
  try {
    // aplica CORS
    if (applyCors(req, res)) return;

    if (req.method !== "POST") {
      return res.status(405).json({ message: "Método não permitido" });
    }

    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }

    const existing = await prisma.cadastroUsers.findUnique({ where: { email } });
    if (existing) {
      return res.status(409).json({ message: "Email já cadastrado" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.cadastroUsers.create({ data: { name, email, password: hashedPassword } });

    return res.status(201).json({ message: "Usuário cadastrado com sucesso" });
  } catch (err) {
    console.error("Cadastro error:", err);
    return res.status(500).json({ message: "Erro interno", error: err.message });
  }
}
