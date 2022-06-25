import publishers from "../models/Publisher.js";
import { handleError } from "../helpers/handleError.js";

class PublisherController {
  static publisherNotFound = (res) => {
    res.status(404).json({
      message: "Registro não encontrado",
    });
  };

  static listAllPublishers = (req, res) => {
    publishers.find((error, publishers) => {
      !error
        ? res.status(200).json(publishers)
        : res.status(500).json({ message: error.message });
    });
  };

  static findPublisherById = (req, res) => {
    publishers.findById(req.params._id, (error, publisher) => {
      !error && publisher
        ? res.status(200).json(publisher)
        : this.publisherNotFound(res);
    });
  };

  static postPublisher = (req, res) => {
    const publisher = new publishers(req.body);
    publisher.save((error) => {
      !error
        ? res.status(201).send(publisher)
        : res.status(400).send({ message: `${error.message}` });
    });
  };

  static updatePublisherById = (req, res) => {
    const publisherId = req.params._id;

    publishers.updateOne(
      { _id: publisherId },
      {
        $set: req.body,
      },
      (error, publisher) => {
        !error
          ? res.status(200).json({
              message:
                publisher.modifiedCount > 0
                  ? "Registro atualizado"
                  : "Nenhum registro atualizado",
              id: publisherId,
            })
          : res.status(500).json({ message: error.message });
      }
    );
  };

  static deletePublisherById = (req, res) => {
    authors.deleteOne({ _id: req.params._id }, (error, publisher) => {
      if (error) {
        res.status(500).json({ message: error.message });
      }

      if (!error && publisher.deletedCount > 0) {
        res.status(200).json({ message: "Registro deletado" });
      }
    });
  };
}

export default PublisherController;
