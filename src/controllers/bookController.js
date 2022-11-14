const BookRepository = require("../repositories/BookRepository");

const books = new BookRepository();

module.exports = class BookController {
  static async getBooks(req, res) {
    try {
      const { body } = req;
      const data = await books.getBooks(body);

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

  static async getBookById(req, res) {
    try {
      const { _id } = req.params;
      const data = await books.getBookById(_id);

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

  static async findBookByPublisherId(req, res) {
    try {
      const { editora } = req.params;
      const data = await books.getBooksByPublisherId(editora);

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

  static async findBookByAuthorId(req, res) {
    try {
      const { autor } = req.params;
      const data = await books.getBooksByAuthorId(autor);

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

  static async setBook(req, res) {
    try {
      const { body } = req;
      const data = await books.set(body);

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

  static async updateBookById(req, res) {
    try {
      const { _id } = req.params;
      const { body } = req;
      const update = await books.updateById(_id, body);

      const updateMessage = !update.modifiedCount
        ? "Nenhum dado foi atualizado"
        : "Registro atualizado";

      return res.status(200).send({ message: updateMessage, body });
    } catch (error) {
      const errorMessage = !error.errors ? error.message : error.errors;

      return res.status(500).send({ message: errorMessage });
    }
  }

  static async deleteBookById(req, res) {
    try {
      const { _id } = req.params;
      const remove = await books.deleteById({ _id });

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

  static async deleteManyBooksById(req, res) {
    try {
      const { livros } = req.body;

      if (!Array.isArray(livros)) {
        return res.status(400).send({
          message:
            "dados incorretos, por favor, verifique se o payload possui o formato indicado",
          format: "livros: [id]",
        });
      }

      await books.deleteManyBooksById(livros);

      return res.status(200).send({ message: "processamento concluído" });
    } catch (error) {
      const errorMessage = !error.errors ? error.message : error.errors;

      return res.status(500).send({ message: errorMessage });
    }
  }
};
