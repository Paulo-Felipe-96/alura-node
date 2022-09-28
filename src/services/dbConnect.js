const mongoose = require("mongoose");
const { mongoDbUserName, mongoDbPassword } = require("../config");
const handleError = require("../helpers/handleError");

const { connect, connection } = mongoose;

async function connectToDb() {
  try {
    return await connect(
      `mongodb+srv://${mongoDbUserName}:${mongoDbPassword}@alura.dno2mge.mongodb.net/alura-node`,
    ).then(connection.once("open", () => console.log("MongoDB: Connected!")));
  } catch (e) {
    handleError(e);
  }
}

module.exports = connectToDb();
