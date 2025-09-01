import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const SECRET = "segredo_super_secreto";

const app = express();
app.use(express.json());
app.use(cors());

function authMiddleware(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ message: "Token não encontrado" });

  try {
    const decoded = jwt.verify(token.split(" ")[1], SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token inválido" });
  }
}

app.get("/users",authMiddleware, async (req, res) => {
  const users = await prisma.cadastroUsers.findMany();
  res.status(200).json(users);
});

app.post("/cadastro", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  try {
    const user = await prisma.cadastroUsers.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        password: hashedPassword,
      },
    });
    res.status(201).send("Usuário cadastrado");
  } catch (err) {
    res.status(500).send({ message: "Erro ao cadastrar", error: err.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const user = await prisma.cadastroUsers.findUnique({
      where: { email: req.body.email },
    });

    if (!user) {
      return res.status(400).json({ message: "Usuário não encontrado" });
    }
    const validacaoPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validacaoPassword) {
      return res.status(400).json({ message: "Senha incorreta" });
    }
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login realizado com sucesso", token });
  } catch (err) {
    res.status(500).json({ message: "Erro no login", error: err.message });
  }
});

app.put("/cadastro/:id", async (req, res) => {
  try {
    await prisma.cadastroUsers.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        email: req.body.email,
        name: req.body.name,
      },
    });
    res.status(200).send("Usuários atualizado");
  } catch (err) {
    res.status(500).send({ message: "Erro ao atualizar", error: err.message });
  }
});

app.delete("/cadastro/:id", async (req, res) => {
  try {
    await prisma.cadastroUsers.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.status(200).send("Deletado com sucesso");
  } catch (err) {
    res.status(500).send({ message: "Erro ao deletar", error: err.message });
  }
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000!"));
