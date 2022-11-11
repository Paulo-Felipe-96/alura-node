const PublisherRepository = require("../repositories/PublisherRepository");

const publisher = new PublisherRepository();

module.exports = class PublisherController {
  static async getPublishers(req, res) {
    try {
      const { body } = req;
      const data = await publisher.getAll(body);

      if (!data.length) {
        return res.status(404).send({
          message: "nenhum dado foi encontrado com o parâmetro informado",
        });
      }

      return res.status(200).send(data);
    } catch (error) {
      const errorMessage = !error.errors ? error.message : error.errors;

      return res.status(500).send({ message: errorMessage });
    }
  }

  static async getPublisherById(req, res) {
    try {
      const { _id } = req.params;
      const data = await publisher.getById(_id);

      if (!data) {
        return res.status(404).send({
          message: "nenhum dado foi encontrado com o parâmetro informado",
        });
      }

      return res.status(200).send(data);
    } catch (error) {
      const errorMessage = !error.errors ? error.message : error.errors;

      return res.status(500).send({ message: errorMessage });
    }
  }

  static async setPublisher(req, res) {
    try {
      const { body } = req;
      const data = await publisher.set(body);

      if (!data) {
        return res
          .status(400)
          .send({ message: "há algo errado com os dados enviados" });
      }

      return res.status(201).send(data);
    } catch (error) {
      const errorMessage = !error.errors ? error.message : error.errors;

      return res.status(500).send({ message: errorMessage });
    }
  }

  static async updatePublisherById(req, res) {
    try {
      const { _id } = req.params;
      const { body } = req;
      const update = await publisher.updateById(_id, body);

      const updateMessage = !update.modifiedCount
        ? "Nenhum dado foi atualizado"
        : "Registro atualizado";

      return res.status(200).send({ message: updateMessage, id: _id });
    } catch (error) {
      const errorMessage = !error.errors ? error.message : error.errors;

      return res.status(500).send({ message: errorMessage });
    }
  }

  static async deletePublisherById(req, res) {
    try {
      const { _id } = req.params;
      const remove = await publisher.deleteById({ _id });

      if (!remove.deletedCount) {
        return res
          .status(404)
          .send({ message: "nenhum registro foi deletado" });
      }

      return res.status(200).send({ message: "registro deletado com sucesso" });
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }
};
