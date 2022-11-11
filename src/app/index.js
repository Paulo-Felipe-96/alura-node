const express = require("express");
const dbConnect = require("../services/dbConnect");
const throwError = require("../helpers/throwError");
const routes = require("../routes");

const app = express();

try {
  routes(app);
} catch (error) {
  throwError(error);
}

module.exports = app;
