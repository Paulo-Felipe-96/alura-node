import express from "express";
import livros from "./models/Livro.js";
import dbConnect from "./services/dbConnect.js";
import { handleError } from "./helpers/handleError.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to bookstore!");
});

app.get("/livros", (req, res) => {
  livros.find((error, livros) => {
    res.status(200).json(livros);
  });
});

app.get("/livro/:_id", (req, res) => {});

app.post("/livros", (req, res) => {
  try {
    const { titulo, autor, editora, numeroPaginas } = req.body;
    livros.create({
      titulo: titulo,
      autor: autor,
      editora: editora,
      numeroPaginas: numeroPaginas,
    });

    res.status(201).json({
      status: 201,
      Object_created: req.body,
    });
  } catch (error) {
    handleError(error);
  }
});

app.delete("/livros/:_id", (req, res) => {
  let deletedCount;
  try {
    livros.deleteOne({ _id: req.params._id }, (error, livros) => {
      if (error) {
        handleError(error);
      }

      deletedCount = livros.deletedCount;

      res.status(200).json({
        status: 200,
        deleted:
          deletedCount === 0 ? "Nenhum registro deletado" : "Registro deletado",
      });
    });
  } catch (error) {
    handleError(error);
  }
});

app.put("/livros/:_id", (req, res) => {});

function buscaLivro(id) {
  return livros.findIndex((livro) => livro.id == id);
}

export default app;
