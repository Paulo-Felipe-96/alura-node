import app from "./src/app.js";
import { port } from "./src/config/index.js";
import { handleError } from "./src/helpers/handleError.js";

try {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
} catch (error) {
  handleError(error);
}
