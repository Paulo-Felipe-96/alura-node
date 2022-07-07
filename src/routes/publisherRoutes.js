const { Router } = require("express");
const PublisherController = require("../controllers/publisherController");

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

module.exports = router;
