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
  .get("/library/livros", getBooks)
  .get("/library/livros/editora/:editora", findBookByPublisherId)
  .get("/library/livros/autor/:autor", findBookByAuthorId)
  .get("/library/livros/:_id", getBookById)
  .post("/library/livros", setBook)
  .put("/library/livros/:_id", updateBookById)
  .delete("/library/livros/", deleteManyBooksById)
  .delete("/library/livros/:_id", deleteBookById);

module.exports = router;
