const AuthorRepository = require("../repositories/AuthorRepository");
const AuthorizationRepository = require("../repositories/AuthorizationRepository");

const authors = new AuthorRepository();
const auth = new AuthorizationRepository("auth");

module.exports = class AuthorController {
  static async getAuthors(req, res) {
    try {
      const { body } = req;
      const { authorization } = req.headers;
      const authorized = !!(await auth.getToken(authorization));

      if (!authorized) {
        return res.status(403).send({
          message: "usuário não autorizado",
        });
      }

      const data = await authors.getAll(body);

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

  static async getAuthorById(req, res) {
    try {
      const { _id } = req.params;
      const { authorization } = req.headers;
      const authorized = !!(await auth.getToken(authorization));

      if (!authorized) {
        return res.status(403).send({
          message: "usuário não autorizado",
        });
      }

      const data = await authors.getById(_id);

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

  static async setAuthor(req, res) {
    try {
      const { body } = req;
      const { authorization } = req.headers;
      const authorized = !!(await auth.getToken(authorization));

      if (!authorized) {
        return res.status(403).send({
          message: "usuário não autorizado",
        });
      }

      const data = await authors.set(body);

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

  static async updateAuthorById(req, res) {
    try {
      const { _id } = req.params;
      const { body } = req;
      const { authorization } = req.headers;
      const authorized = !!(await auth.getToken(authorization));

      if (!authorized) {
        return res.status(403).send({
          message: "usuário não autorizado",
        });
      }

      const { modifiedCount } = await authors.updateById(_id, body);

      const message = !modifiedCount
        ? "Nenhum dado foi atualizado"
        : "Registro atualizado";

      return res.status(200).send({ message, _id });
    } catch (error) {
      const message = !error.errors ? error.message : error.errors;

      return res.status(500).send({ message });
    }
  }

  static async deleteAuthorById(req, res) {
    try {
      const { _id } = req.params;
      const { authorization } = req.headers;
      const authorized = !!(await auth.getToken(authorization));

      if (!authorized) {
        return res.status(403).send({
          message: "usuário não autorizado",
        });
      }

      const { deletedCount } = await authors.deleteById(_id);

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
