const {
  getPublishers, getPublisherById, setPublisher, updatePublisherById, deletePublisherById,
} = require("../repositories/PublisherRepository");

class PublisherController {
  static async getPublishers(req, res) {
    try {
      const publishers = await getPublishers();

      if (!publishers.length) {
        return res.status(404).json({ message: "nenhum dado foi retornado" });
      }

      return res.status(200).json(publishers);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async getPublisherById(req, res) {
    const { _id } = req.params;

    try {
      const publishers = await getPublisherById(_id);

      if (!publishers) {
        return res.status(404).json({ message: "nenhum dado foi retornado" });
      }

      return res.status(200).json(publishers);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async setPublisher(req, res) {
    const { body } = req;

    try {
      const publisher = await setPublisher(body);

      if (!publisher) {
        return res
          .status(400)
          .json({ message: "há algo errado com o corpo da requisição" });
      }

      return res.status(201).json(publisher);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async updatePublisherById(req, res) {
    const { _id } = req.params;
    const publisher = req.body;
    let isUpdated;

    try {
      const update = await updatePublisherById(_id, publisher);

      isUpdated = update.modifiedCount > 0
        ? "Registro atualizado"
        : "Nenhum dado foi atualizado";

      return res.status(200).json({ message: isUpdated, id: _id });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async deletePublisherById(req, res) {
    const { _id } = req.params;

    try {
      const remove = await deletePublisherById({ _id });

      if (!remove.deletedCount) {
        return res
          .status(404)
          .json({ message: "nenhum registro foi deletado" });
      }

      return res.status(200).json({ message: "registro deletado" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = PublisherController;
