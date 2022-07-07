import express from "express";
import authors from "./authorsRoutes.js";
import books from "./booksRoutes.js";
import publishers from "./publisherRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).json({
      status: 200,
      message: `Welcome to bookstore API. See the endpoints in this repo:
      https://github.com/Paulo-Felipe-96/bookstore-api/tree/main/__endpoints__`,
    });
  });

  app.use(express.json(), books, authors, publishers);
};

export default routes;
