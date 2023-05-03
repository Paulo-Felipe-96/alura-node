const config = require("dotenv/config");

const mongoDbUserName = process.env.ATLAS_USERNAME;
const mongoDbPassword = process.env.ATLAS_PASSWORD;
const port = process.env.PORT || 3000;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const authorization = process.env.AUTHORIZATION;

module.exports = {
  mongoDbPassword,
  mongoDbUserName,
  port,
  dbHost,
  dbName,
  authorization,
};
