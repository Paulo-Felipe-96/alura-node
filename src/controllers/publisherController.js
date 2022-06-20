import publishers from "../models/Publisher.js";

class PublisherController {
  static publisherNotFound = (res) => {
    res.status(404).json({
      message: "Registro não encontrado",
    });
  };

  static listAllPublishers = (req, res) => {
    publishers.find((error, publishers) => {
      if (!error) {
        res.status(200).json(publishers);
      }
    });
  };

  static findPublisherById = (req, res) => {
    publishers.findById(req.params._id, (error, publisher) => {
      if (!error && publisher) {
        res.status(200).json(publisher);
      } else {
        this.publisherNotFound(res);
      }
    });
  };

  static postPublisher = (req, res) => {
    const publisher = new publishers(req.body);
    publisher.save((error) => {
      !error
        ? res.status(201).send(publisher)
        : res.status(500).send({ message: `${error.message}` });
    });
  };

  static updatePublisherById = (req, res) => {
    const publisherId = req.params._id;

    authors.updateOne(
      { _id: publisherId },
      {
        $set: req.body,
      },
      (error, publisher) => {
        const notFound = this.publisherNotFound(res);
        const success = res.status(200).json({
          message:
            publisher.modifiedCount > 0
              ? "Registro atualizado"
              : "Nenhum registro atualizado",
        });

        !error ? success : notFound;
      }
    );
  };

  static deletePublisherById = (req, res) => {
    publishers.deleteOne({ _id: req.params._id }, (error, publisher) => {
      publisher.deletedCount === 0
        ? this.publisherNotFound(res)
        : res.status(200).json({ message: "Registro deletado" });

      if (error) {
        res.status(500).json({ message: error.message });
      }
    });
  };
}

export default PublisherController;
