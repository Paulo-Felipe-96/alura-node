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
      const message = !error.errors ? error.message : error.errors;

      return res.status(500).send({ message });
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
      const message = !error.errors ? error.message : error.errors;

      return res.status(500).send({ message });
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
      const message = !error.errors ? error.message : error.errors;

      return res.status(500).send({ message });
    }
  }

  static async updatePublisherById(req, res) {
    try {
      const { _id } = req.params;
      const { body } = req;
      const { modifiedCount } = await publisher.updateById(_id, body);

      const message = !modifiedCount
        ? "Nenhum dado foi atualizado"
        : "Registro atualizado";

      return res.status(200).send({ message, _id });
    } catch (error) {
      const message = !error.errors ? error.message : error.errors;

      return res.status(500).send({ message });
    }
  }

  static async deletePublisherById(req, res) {
    try {
      const { _id } = req.params;
      const { deletedCount } = await publisher.deleteById({ _id });

      if (!deletedCount) {
        return res
          .status(404)
          .send({ message: "nenhum registro foi deletado" });
      }

      return res.status(200).send({ message: "registro deletado com sucesso" });
    } catch (error) {
      const message = !error.errors ? error.message : error.errors;

      return res.status(500).send({ message });
    }
  }
};
