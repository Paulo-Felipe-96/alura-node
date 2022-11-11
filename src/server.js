const app = require("./app");
const { port } = require("./config");
const throwError = require("./helpers/throwError");

async function server(port) {
  try {
    return app.listen(port, () => console.log(`Server is now running on: 'http://localhost:${port}'`));
  } catch (error) {
    throwError(error);
  }
}

server(port);
