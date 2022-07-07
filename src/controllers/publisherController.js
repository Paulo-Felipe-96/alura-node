const publishers = require("../models/Publisher");

class PublisherController {
  static listAllPublishers = (req, res) => {
    publishers.find((error, publishers) => {
      !error
        ? res.status(200).json(publishers)
        : res.status(500).json({ message: error.message });
    });
  };

  static findPublisherById = (req, res) => {
    publishers.findById(req.params._id, (error, publisher) => {
      if (error) {
        res.status(500).json({ message: error });
      }

      !error && !publisher
        ? res.json({ mensagem: "Registro não encontrado" })
        : res.json(publisher);
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
    publishers.deleteOne({ _id: req.params._id }, (error, publisher) => {
      if (error) {
        res.status(500).json({ message: error });
      }

      if (!error) {
        publisher.deletedCount
          ? res.status(200).json({ message: "Registro deletado" })
          : res.status(404).json({ message: "Registro não encontrado" });
      }
    });
  };
}

module.exports = PublisherController;
