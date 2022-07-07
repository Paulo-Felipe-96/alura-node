const { Router } = require("express");
const BookController = require("../controllers/bookController");

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
  .post("/livros", postBook)
  .put("/livro/:_id", updateBookById)
  .delete("/livros/deletar", deleteBooks)
  .delete("/livro/:_id", deleteBookById);

module.exports = router;
