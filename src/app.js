const express = require("express");
const dbConnect = require("./services/dbConnect");
const handleError = require("./helpers/handleError");
const routes = require("./routes");

const app = express();

try {
  routes(app);
} catch (error) {
  handleError(error);
}

module.exports = app;
