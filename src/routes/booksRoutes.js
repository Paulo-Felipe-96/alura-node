import { Router } from "express";
import BookController from "../controllers/bookController.js";

const {
  listAllBooks,
  postBook,
  deleteBookById,
  deleteBooks,
  findBookById,
  updateBookById,
  findBookByPublisherId,
  findBookByAuthorId,
} = BookController;

const router = Router();

router
  .get("/livros", listAllBooks)
  .get("/livros/editora/:editora", findBookByPublisherId)
  .get("/livros/autor/:autor", findBookByAuthorId)
  .get("/livro/:_id", findBookById)
  .put("/livro/:_id", updateBookById)
  .post("/livros", postBook)
  .delete("/livros/deletar", deleteBooks)
  .delete("/livro/:_id", deleteBookById)

export default router;
