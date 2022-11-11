const { Router } = require("express");
const {
  getBooks,
  setBook,
  deleteBookById,
  deleteManyBooksById,
  getBookById,
  updateBookById,
  findBookByPublisherId,
  findBookByAuthorId,
} = require("../controllers/bookController");

const router = Router();

router
  .get("/livros", getBooks)
  .get("/livros/editora/:editora", findBookByPublisherId)
  .get("/livros/autor/:autor", findBookByAuthorId)
  .get("/livros/:_id", getBookById)
  .post("/livros", setBook)
  .put("/livros/:_id", updateBookById)
  .delete("/livros/", deleteManyBooksById)
  .delete("/livros/:_id", deleteBookById);

module.exports = router;
