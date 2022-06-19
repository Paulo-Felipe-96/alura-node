import express from "express";
import dbConnect from "./services/dbConnect.js";
import { handleError } from "./helpers/handleError.js";
import routes from "./routes/index.js";

const app = express();

try {
  routes(app);
} catch (error) {
  handleError(error);
}

export default app;
