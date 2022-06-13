const http = require("http");
const port = 3000;

const routes = {
  "/": "Curso de Node",
  "/livros": "Entrei na pagina de livros",
  "/autores": "Listagem de autores",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(routes[req.url]);
});

server.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
