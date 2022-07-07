const app = require("./src/app");
const { port } = require("./src/config");
const handleError = require("./src/helpers/handleError");

try {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
} catch (error) {
  handleError(error);
}
