import express from "express";
import authors from "./authorsRoutes.js";
import books from "./booksRoutes.js";
import publishers from "./publisherRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Welcome");
  });

  app.use(express.json(), books, authors, publishers);
};

export default routes;
