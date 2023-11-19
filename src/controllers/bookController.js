const { auth } = require("../models");
const BookRepository = require("../repositories/BookRepository");

const books = new BookRepository();

module.exports = class BookController {
  static async getBooks(req, res) {
    try {
      const { body } = req;
      const data = await books.getBooks(body);
      const { authorization } = req.headers;
      const authorized = await auth.getToken(authorization);

      if (!authorized) {
        return res.status(403).send({
          message: "usuário não autorizado",
        });
      }

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

  static async getBookById(req, res) {
    try {
      const { _id } = req.params;
      const data = await books.getBookById(_id);
      const { authorization } = req.headers;
      const authorized = await auth.getToken(authorization);

      if (!authorized) {
        return res.status(403).send({
          message: "usuário não autorizado",
        });
      }

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

  static async getBookByPublisherId(req, res) {
    try {
      const { editora } = req.params;
      const data = await books.getBooksByPublisherId(editora);
      const { authorization } = req.headers;
      const authorized = await auth.getToken(authorization);

      if (!authorized) {
        return res.status(403).send({
          message: "usuário não autorizado",
        });
      }

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

  static async findBookByAuthorId(req, res) {
    try {
      const { autor } = req.params;
      const data = await books.getBooksByAuthorId(autor);
      const { authorization } = req.headers;
      const authorized = await auth.getToken(authorization);

      if (!authorized) {
        return res.status(403).send({
          message: "usuário não autorizado",
        });
      }

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

  static async setBook(req, res) {
    try {
      const { body } = req;
      const data = await books.set(body);
      const { authorization } = req.headers;
      const authorized = await auth.getToken(authorization);

      if (!authorized) {
        return res.status(403).send({
          message: "usuário não autorizado",
        });
      }

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

  static async updateBookById(req, res) {
    try {
      const { _id } = req.params;
      const { body } = req;
      const { modifiedCount } = await books.updateById(_id, body);
      const { authorization } = req.headers;
      const authorized = await auth.getToken(authorization);

      if (!authorized) {
        return res.status(403).send({
          message: "usuário não autorizado",
        });
      }

      const message = !modifiedCount
        ? "Nenhum dado foi atualizado"
        : "Registro atualizado";

      return res.status(200).send({ message, body });
    } catch (error) {
      const message = !error.errors ? error.message : error.errors;

      return res.status(500).send({ message });
    }
  }

  static async deleteBookById(req, res) {
    try {
      const { _id } = req.params;
      const { deletedCount } = await books.deleteById(_id);
      const { authorization } = req.headers;
      const authorized = await auth.getToken(authorization);

      if (!authorized) {
        return res.status(403).send({
          message: "usuário não autorizado",
        });
      }

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

  static async deleteManyBooksById(req, res) {
    try {
      const { livros } = req.body;
      const { authorization } = req.headers;
      const authorized = await auth.getToken(authorization);

      if (!authorized) {
        return res.status(403).send({
          message: "usuário não autorizado",
        });
      }

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
      const message = !error.errors ? error.message : error.errors;

      return res.status(500).send({ message });
    }
  }
};
