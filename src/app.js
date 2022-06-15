import express from "express";
import livros from "./models/Livro.js";
import dbConnect from "./services/dbConnect.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node");
});

app.get("/livros", (req, res) => {
  livros.find((error, livros) => {
    res.status(200).json(livros);
  });
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
  let posicao = buscaLivro(req.params.id);
  livros[posicao].titulo = req.body.titulo;
  res.json(livros);
});

app.delete("/livros/:id", (req, res) => {
  const posicao = buscaLivro(req.params.id);
  if (livros.length) {
    livros.splice(posicao, 1);
    res.json(livros);
  }
  if (!livros.length) {
    res.status(404).end(`Nenhum registro encontrado`);
  }
});

function buscaLivro(id) {
  return livros.findIndex((livro) => livro.id == id);
}

export default app;
