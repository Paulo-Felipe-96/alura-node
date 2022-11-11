const PublisherRepository = require("../repositories/PublisherRepository");

const publishers = new PublisherRepository();

module.exports = class PublisherController {
  static async getPublishers(req, res) {
    try {
      const data = await publishers.getAll();

      if (!data.length) {
        return res.status(404).json({ message: "nenhum dado foi retornado" });
      }

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async getPublisherById(req, res) {
    const { _id } = req.params;

    try {
      const data = await publishers.getById(_id);

      if (!data) {
        return res.status(404).json({ message: "nenhum dado foi retornado" });
      }

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async setPublisher(req, res) {
    const { body } = req;

    try {
      const data = await publishers.set(body);

      if (!data) {
        return res
          .status(400)
          .json({ message: "há algo errado com o corpo da requisição" });
      }

      return res.status(201).json(data);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async updatePublisherById(req, res) {
    const { _id } = req.params;
    const { body } = req;
    let updateMessage;

    try {
      const data = await publishers.updateById(_id, body);

      updateMessage = !data.modifiedCount
        ? "Nenhum dado foi atualizado"
        : "Registro atualizado";

      return res.status(200).json({ message: updateMessage, id: _id });
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
};
