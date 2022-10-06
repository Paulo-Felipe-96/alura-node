const {
  getBooks,
  getBookById,
  setBook,
  updateBookById,
  deleteBookById,
  deleteManyBooksById,
  getBooksByAuthorId,
  getBooksByPublisherId,
} = require("../repositories/BookRepository");

class BookController {
  static async getBooks(req, res) {
    try {
      const books = await getBooks();

      return res.status(200).json({ books });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async getBookById(req, res) {
    const { _id } = req.params;

    try {
      const book = await getBookById(_id);

      return res.status(200).json({ book });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async findBookByPublisherId(req, res) {
    const { editora } = req.params;

    try {
      const data = await getBooksByPublisherId(editora);

      if (!data) {
        return res.status(404).json({ message: "nenhum dado foi retornado" });
      }

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async findBookByAuthorId(req, res) {
    const { autor } = req.params;

    try {
      const data = await getBooksByAuthorId(autor);

      if (!data) {
        return res.status(404).json({ message: "nenhum dado foi retornado" });
      }

      return res.status(200).json({ data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async setBook(req, res) {
    const { body } = req;

    try {
      const data = await setBook(body);

      if (!data) {
        return res
          .status(400)
          .json({ message: "há algo errado com o corpo da requisição" });
      }

      return res.status(201).json({ data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async updateBookById(req, res) {
    const { _id } = req.params;
    const data = req.body;
    let isUpdated;

    try {
      const update = await updateBookById(_id, data);

      isUpdated = update.modifiedCount > 0
        ? "Registro atualizado"
        : "Nenhum dado foi atualizado";

      return res.status(200).json({ message: isUpdated, data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async deleteBookById(req, res) {
    const { _id } = req.params;

    try {
      const remove = await deleteBookById({ _id });

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

  static async deleteManyBooksById(req, res) {
    const { livros } = req.body;

    try {
      if (Array.isArray(livros)) {
        await deleteManyBooksById(livros);

        res.status(200).json({ message: "processamento concluído" });
      } else {
        res.status(400).json({
          message: "dados incorretos, por favor, verifique se o payload possui o formato indicado",
          format: "livros: [id]",
        });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = BookController;
