import express from "express";

const app = express();

app.use(express.json());

const livros = [
  { id: 1, titulo: "Senhor dos Aneis" },
  { id: 2, titulo: "O Hobbit" },
  { id: 3, titulo: "O pequeno príncipe" },
  { id: 4, titulo: "O banana" },
];

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
  const posicao = buscaLivro(req.params.id);
  res.json(livros[posicao]);
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
