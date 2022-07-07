const config = require("dotenv/config");

const mongoDbUserName = process.env.ATLAS_USERNAME;
const mongoDbPassword = process.env.ATLAS_PASSWORD;
const port = process.env.PORT || 3000;

module.exports = {
  mongoDbPassword,
  mongoDbUserName,
  port,
};
