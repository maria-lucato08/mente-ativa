import prisma from "../prisma.js";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  try {
    // ===== CORS =====
    res.setHeader("Access-Control-Allow-Origin", "*"); // ou seu domínio
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.method === "OPTIONS") {
      return res.status(200).end();
    }

    // ===== Apenas POST =====
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
    await prisma.cadastroUsers.create({
      data: { name, email, password: hashedPassword },
    });

    return res.status(201).json({ message: "Usuário cadastrado com sucesso" });
  } catch (err) {
    console.error("Cadastro error:", err);
    return res.status(500).json({ message: "Erro interno", error: err.message });
  }
}
