const { Router } = require("express");
const AuthorControler = require("../controllers/authorsController");

const {
  getAuthors,
  getAuthorById,
  updateAuthorById,
  setAuthor,
  deleteAuthorById,
} = AuthorControler;

const router = Router();

router
  .get("/autores", getAuthors)
  .get("/autores/:_id", getAuthorById)
  .post("/autores", setAuthor)
  .put("/autores/:_id", updateAuthorById)
  .delete("/autores/:_id", deleteAuthorById);

module.exports = router;
