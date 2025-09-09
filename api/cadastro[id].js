import prisma from "../prisma.js";

export default async function handler(req, res) {
    // ===== CORS =====
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173"); // seu frontend
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Responder preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();}

  const id = parseInt(req.query.id);

  if (req.method === "PUT") {
    const { email, name } = req.body;
    try {
      await prisma.cadastroUsers.update({
        where: { id },
        data: { email, name },
      });
      return res.status(200).json({ message: "Usuário atualizado" });
    } catch (err) {
      return res.status(500).json({ message: "Erro ao atualizar", error: err.message });
    }
  }

  if (req.method === "DELETE") {
    try {
      await prisma.cadastroUsers.delete({ where: { id } });
      return res.status(200).json({ message: "Deletado com sucesso" });
    } catch (err) {
      return res.status(500).json({ message: "Erro ao deletar", error: err.message });
    }
  }

  return res.status(405).json({ message: "Método não permitido" });
}