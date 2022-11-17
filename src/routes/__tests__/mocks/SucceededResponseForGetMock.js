const baseUrl = "/";
const editoras = "editoras";
const livros = "livros";
const autores = "autores";

const succeededScenariosForGet = [
  {
    title: "should return status_code 200 for GET request base endpoint",
    path: `${baseUrl}`,
  },
  {
    title: "should return status_code 200 for GET request editoras",
    path: `${baseUrl}${editoras}`,
  },
  {
    title: "should return status_code 200 for GET request livros",
    path: `${baseUrl}${livros}`,
  },
  {
    title: "should return status_code 200 for GET request autores",
    path: `${baseUrl}${autores}`,
  },
];

module.exports = { succeededScenariosForGet };
