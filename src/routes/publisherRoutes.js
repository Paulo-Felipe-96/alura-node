import { Router } from "express";
import PublisherController from "../controllers/publisherController.js";

const {
  listAllPublishers,
  findPublisherById,
  postPublisher,
  updatePublisherById,
  deletePublisherById,
} = PublisherController;

const router = Router();

router
  .get("/editoras", listAllPublishers)
  .get("/editora/:_id", findPublisherById)
  .post("/editora", postPublisher)
  .put("/editora/:_id", updatePublisherById)
  .delete("/editora/:_id", deletePublisherById);

export default router;
