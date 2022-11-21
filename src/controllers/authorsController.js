const AuthorRepository = require("../repositories/AuthorRepository");

const authors = new AuthorRepository();

module.exports = class AuthorController {
  static async getAuthors(req, res) {
    try {
      const { body } = req;
      const data = await authors.getAll(body);

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

  static async getAuthorById(req, res) {
    try {
      const { _id } = req.params;
      const data = await authors.getById(_id);

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

  static async setAuthor(req, res) {
    try {
      const { body } = req;
      const data = await authors.set(body);

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

  static async updateAuthorById(req, res) {
    try {
      const { _id } = req.params;
      const { body } = req;
      const update = await authors.updateById(_id, body);

      const updateMessage = !update.modifiedCount
        ? "Nenhum dado foi atualizado"
        : "Registro atualizado";

      return res.status(200).send({ message: updateMessage, id: _id });
    } catch (error) {
      const errorMessage = !error.errors ? error.message : error.errors;

      return res.status(500).send({ message: errorMessage });
    }
  }

  static async deleteAuthorById(req, res) {
    try {
      const { _id } = req.params;
      const remove = await authors.deleteById({ _id });

      if (!remove.deletedCount) {
        return res
          .status(404)
          .send({ message: "nenhum registro foi deletado" });
      }

      return res.status(200).send({ message: "registro deletado com sucesso" });
    } catch (error) {
      const errorMessage = !error.errors ? error.message : error.errors;

      return res.status(500).send({ message: errorMessage });
    }
  }
};
