const { Router } = require("express");

const {
  getPublishers,
  getPublisherById,
  setPublisher,
  updatePublisherById,
  deletePublisherById,
} = require("../controllers/publisherController");

const router = Router();

router
  .get("/editoras", getPublishers)
  .get("/editoras/:_id", getPublisherById)
  .post("/editoras", setPublisher)
  .put("/editoras/:_id", updatePublisherById)
  .delete("/editoras/:_id", deletePublisherById);

module.exports = router;
