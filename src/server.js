const app = require("./app");
const { port } = require("./config");
const handleError = require("./helpers/handleError");

function startApp() {
  return app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

try {
  startApp();
} catch (error) {
  handleError(error);
}
