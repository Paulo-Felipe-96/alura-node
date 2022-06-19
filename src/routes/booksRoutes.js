import { Router } from "express";
import BookController from "../controllers/bookController.js";

const { listAllBooks, postBook, deleteBookById, findBookById, updateBookById } =
  BookController;

const router = Router();

router
  .get("/livros", listAllBooks)
  .get("/livro/:_id", findBookById)
  .put("/livro/:_id", updateBookById)
  .post("/livros", postBook)
  .delete("/livro/:_id", deleteBookById);

export default router;
