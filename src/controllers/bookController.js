const BookRepository = require("../repositories/BookRepository");

const books = new BookRepository();

module.exports = class BookController {
  static async getBooks(req, res) {
    try {
      const data = await books.getBooks();

      return res.status(200).json({ data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async getBookById(req, res) {
    const { _id } = req.params;

    try {
      const data = await books.getBookById(_id);

      return res.status(200).json({ data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async findBookByPublisherId(req, res) {
    const { editora } = req.params;

    try {
      const data = await books.getBooksByPublisherId(editora);

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
      const data = await books.getBooksByAuthorId(autor);

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
      const data = await books.set(body);

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
    let updateMessage;

    try {
      const update = await books.updateById(_id, data);

      updateMessage = !update.modifiedCount
        ? "Nenhum dado foi atualizado"
        : "Registro atualizado";

      return res.status(200).json({ message: updateMessage, data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async deleteBookById(req, res) {
    const { _id } = req.params;

    try {
      const remove = await books.deleteById({ _id });

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
      if (!Array.isArray(livros)) {
        return res.status(400).json({
          message:
            "dados incorretos, por favor, verifique se o payload possui o formato indicado",
          format: "livros: [id]",
        });
      }

      await books.deleteManyBooksById(livros);

      return res.status(200).json({ message: "processamento concluído" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
