const baseUrl = "/";
const editoras = "editora";
const livros = "livro";
const autores = "autor";

const badScenariosForDelete = [
  {
    title: "should return status_code 404 for DELETE request base endpoint",
    path: `${baseUrl}`,
  },
  {
    title: "should return status_code 404 for DELETE request editoras",
    path: `${baseUrl}${editoras}`,
  },
  {
    title: "should return status_code 404 for DELETE request livros",
    path: `${baseUrl}${livros}`,
  },
  {
    title: "should return status_code 404 for DELETE request autores",
    path: `${baseUrl}${autores}`,
  },
];

module.exports = { badScenariosForDelete };
