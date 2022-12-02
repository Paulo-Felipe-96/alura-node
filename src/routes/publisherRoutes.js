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
  .get("/library/editoras", getPublishers)
  .get("/library/editoras/:_id", getPublisherById)
  .post("/library/editoras", setPublisher)
  .put("/library/editoras/:_id", updatePublisherById)
  .delete("/library/editoras/:_id", deletePublisherById);

module.exports = router;
