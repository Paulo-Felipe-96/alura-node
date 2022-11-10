const config = require("dotenv/config");

const mongoDbUserName = process.env.ATLAS_USERNAME;
const mongoDbPassword = process.env.ATLAS_PASSWORD;
const port = process.env.PORT || 3000;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;

module.exports = {
  mongoDbPassword,
  mongoDbUserName,
  port,
  dbHost,
  dbName,
};
