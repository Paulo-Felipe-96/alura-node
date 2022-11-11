const AuthorRepository = require("../repositories/AuthorRepository");

const authors = new AuthorRepository();

module.exports = class AuthorController {
  static async getAuthors(req, res) {
    const { body } = req;

    try {
      const data = await authors.getAll(body);

      if (!data.length) {
        return res.status(404).json({ message: "nenhum dado foi retornado" });
      }

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async getAuthorById(req, res) {
    const { _id } = req.params;

    try {
      const data = await authors.getById(_id);

      if (!data) {
        return res.status(404).json({ message: "nenhum dado foi retornado" });
      }

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async setAuthor(req, res) {
    const { body } = req;

    try {
      const data = await authors.set(body);

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

  static async updateAuthorById(req, res) {
    const { _id } = req.params;
    const { body } = req;
    let updateMessage;

    try {
      const update = await authors.updateById(_id, body);

      updateMessage = update.modifiedCount > 0
        ? "Registro atualizado"
        : "Nenhum dado foi atualizado";

      return res.status(200).json({ message: updateMessage, id: _id });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async deleteAuthorById(req, res) {
    const { _id } = req.params;

    try {
      const remove = await authors.deleteById({ _id });

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
