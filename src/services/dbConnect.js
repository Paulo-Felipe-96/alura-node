import mongoose from "mongoose";
import { mongoDbUserName, mongoDbPassword } from "../config/index.js";
import { handleError } from "../helpers/handleError.js";

const { connect, connection } = mongoose;

async function connectToDb() {
  try {
    return await connect(
      `mongodb+srv://${mongoDbUserName}:${mongoDbPassword}@alura.dno2mge.mongodb.net/alura-node`
    ).then(connection.once("open", () => console.log("MongoDB: Connected!")));
  } catch (e) {
    handleError(e);
  }
}

export default connectToDb();
