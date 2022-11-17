const app = require("./app");
const { port } = require("./config");
const throwError = require("./helpers/throwError");

async function server(port) {
  try {
    return app.listen(port, () => console.log(`Server is now running at: 'http://localhost:${port}'`));
  } catch (error) {
    throwError(error);
  }
}

server(port);
