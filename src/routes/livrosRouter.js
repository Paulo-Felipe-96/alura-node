import { Router } from "express";
import LivroController from "../controllers/livrosController.js";

const { listAllBooks, postBook, deleteBook, findBookById, updateBookById } =
  LivroController;

const router = Router();

router
  .get("/livros", listAllBooks)
  .get("/livro/:_id", findBookById)
  .put("/livro/:_id", updateBookById)
  .post("/livros", postBook)
  .delete("/livro/:_id", deleteBook);

export default router;
