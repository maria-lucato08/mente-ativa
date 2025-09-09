import prisma from "./prisma.js";
import { authMiddleware } from "./auth.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { user } = authMiddleware(req, res);
      const users = await prisma.cadastroUsers.findMany();
      return res.status(200).json(users);
    } catch (err) {
      return res.status(401).json({ message: err.message });
    }
  }

  if (req.method === "POST") {
    const bcrypt = await import("bcrypt");
    const { email, name, password } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      await prisma.cadastroUsers.create({
        data: { email, name, password: hashedPassword },
      });
      return res.status(201).json({ message: "Usuário cadastrado" });
    } catch (err) {
      return res.status(500).json({ message: "Erro ao cadastrar", error: err.message });
    }
  }

  return res.status(405).json({ message: "Método não permitido" });
}