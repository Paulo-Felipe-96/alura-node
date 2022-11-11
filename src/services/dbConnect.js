const { connect, connection } = require("mongoose");
const {
  mongoDbUserName,
  mongoDbPassword,
  dbHost,
  dbName,
} = require("../config");
const handleError = require("../helpers/throwError");

async function connectToDb() {
  try {
    return await connect(
      `mongodb+srv://${mongoDbUserName}:${mongoDbPassword}@${dbHost}/${dbName}`,
    ).then(connection.once("open", () => console.log("MongoDB: Connected!")));
  } catch (e) {
    handleError(e);
  }
}

module.exports = connectToDb();
