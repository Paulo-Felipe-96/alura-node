const enableJson = require("express").json();
const authors = require("./authorsRoutes");
const books = require("./booksRoutes");
const publishers = require("./publisherRoutes");
const AuthorizationRepository = require("../repositories/AuthorizationRepository");

const auth = new AuthorizationRepository("auth");

const routes = (app) => {
  app.route("/library/").get(async (req, res) => {
    const authorized = await auth.getToken(req.headers.authorization);

    if (!authorized) {
      return res.status(401).send({ message: "Não autorizado" });
    }

    return res.status(200).send({
      status: 200,
      message: `Welcome to bookstore API. See the endpoints in this repo:
        https://github.com/Paulo-Felipe-96/bookstore-api/tree/main/__endpoints__`,
    });
  });

  app.use(enableJson, books, authors, publishers);
};

module.exports = routes;
