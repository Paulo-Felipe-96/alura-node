const {
  getAuthors, getAuthorById, setAuthor, updateAuthorById, deleteAuthorById,
} = require("../repositories/AuthorRepository");

class AuthorController {
  static async getAuthors(req, res) {
    try {
      const data = await getAuthors();

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
      const data = await getAuthorById(_id);

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
      const data = await setAuthor(body);

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
    const data = req.body;
    let isUpdated;

    try {
      const update = await updateAuthorById(_id, data);

      isUpdated = update.modifiedCount > 0
        ? "Registro atualizado"
        : "Nenhum dado foi atualizado";

      return res.status(200).json({ message: isUpdated, id: _id });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async deleteAuthorById(req, res) {
    const { _id } = req.params;

    try {
      const remove = await deleteAuthorById({ _id });

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

module.exports = AuthorController;
