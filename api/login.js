import prisma from "./prisma.js";
import { SECRET_KEY } from "./auth.js";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Método não permitido" });

  const bcrypt = await import("bcrypt");
  const { email, password } = req.body;

  try {
    const user = await prisma.cadastroUsers.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ message: "Usuário não encontrado" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ message: "Senha incorreta" });

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: "1h" });
    return res.status(200).json({ message: "Login realizado com sucesso", token });
  } catch (err) {
    return res.status(500).json({ message: "Erro no login", error: err.message });
  }
}