const { Router } = require("express");
const {
  getAuthors,
  getAuthorById,
  updateAuthorById,
  setAuthor,
  deleteAuthorById,
} = require("../controllers/authorsController");

const router = Router();

router
  .get("/library/autores", getAuthors)
  .get("/library/autores/:_id", getAuthorById)
  .post("/library/autores", setAuthor)
  .put("/library/autores/:_id", updateAuthorById)
  .delete("/library/autores/:_id", deleteAuthorById);

module.exports = router;
