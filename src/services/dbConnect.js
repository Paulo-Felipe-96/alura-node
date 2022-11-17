const { connect } = require("mongoose");
const {
  mongoDbUserName,
  mongoDbPassword,
  dbHost,
  dbName,
} = require("../config");
const throwError = require("../helpers/throwError");

async function connectToDb() {
  try {
    return await connect(
      `mongodb+srv://${mongoDbUserName}:${mongoDbPassword}@${dbHost}/${dbName}`,
    );
  } catch (e) {
    throwError(e);
  }
}

module.exports = connectToDb();
