import { Router } from "express";
import AuthorControler from "../controllers/authorsController.js";

const {
  listAllAuthors,
  findAuthorById,
  updateAuthorById,
  postAuthor,
  deleteAuthorById,
} = AuthorControler;

const router = Router();

router
  .get("/autores", listAllAuthors)
  .get("/autor/:_id", findAuthorById)
  .post("/autores", postAuthor)
  .put("/autor/:_id", updateAuthorById)
  .delete("/autor/:_id", deleteAuthorById);

export default router;
