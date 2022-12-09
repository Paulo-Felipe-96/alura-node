const baseUrl = "/library/";
const editora = "editora";
const livro = "livro";
const autor = "autor";
const editoras = "editoras";
const livros = "livros";
const autores = "autores";

const badScenariosForDelete = [
  {
    title: "should return status code 404 when requesting a non-existent route endpoint",
    path: "/",
  },
  {
    title: "should return status code 404 when requesting a non-existent route editora",
    path: `${baseUrl}${editora}`,
  },
  {
    title: "should return status code 404 when requesting a non-existent route livro",
    path: `${baseUrl}${livro}`,
  },
  {
    title: "should return status code 404 when requesting a non-existent route autor",
    path: `${baseUrl}${autor}`,
  },
];

const badScenariosForPost = [
  {
    title:
      "should return status_code 500 when requesting with an empty body or haven't some required field for POST request editoras",
    path: `${baseUrl}${editoras}`,
  },
  {
    title:
      "should return status_code 500 when requesting with an empty body or haven't some required field for POST request livros",
    path: `${baseUrl}${livros}`,
  },
  {
    title:
      "should return status_code 500 when requesting with an empty body or haven't some required field for POST request autores",
    path: `${baseUrl}${autores}`,
  },
];

module.exports = { badScenariosForDelete, badScenariosForPost };
