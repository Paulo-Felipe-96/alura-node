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
  .get("/autor/:_id", getAuthorById)
  .post("/autores", setAuthor)
  .put("/autor/:_id", updateAuthorById)
  .delete("/autor/:_id", deleteAuthorById);

module.exports = router;
