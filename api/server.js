import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.get("/cadastro", async (req, res) => {
  const usersCadastrados = await prisma.CadastroUsers.findMany();
  res.status(200).json(usersCadastrados);
});

app.post("/cadastro", async (req, res) => {
  await prisma.CadastroUsers.create({
    data: {
      email: req.body.email,
      name: req.body.name,
    },
  });
  res.status(201).send("Usuário cadastrado");
});

app.put("/cadastro:id", async (req, res) => {
  await prisma.CadastroUsers.update({
    where: {
      id: req.params.id,
    },
    data: {
      email: req.body.email,
      name: req.body.name,
    },
  });
  res.status(200).send("Usuários atualizado")
});

app.delete("/cadastro:id", async (req, res) => {
  await prisma.CadastroUsers.delete({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).send("Deletado com sucesso");
});

app.listen(3000);
