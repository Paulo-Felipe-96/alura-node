const Book = require("../../Book");

describe("Book's model tests", () => {
  const bookObj = {
    titulo: "Código limpo: Habilidades práticas do Agile Software",
    linkCompra: "https://www.amazon.com.br/C%C3%B3digo-limpo-Robert-C-Martin",
    numeroPaginas: 425,
  };

  it("should instances a new book", () => {
    const book = new Book(bookObj);

    expect(book).toEqual(expect.objectContaining(bookObj));
  });

  it("should have props", () => {
    const book = new Book(bookObj);
    const props = [
      "id",
      "titulo",
      "autor",
      "editora",
      "linkCompra",
      "numeroPaginas",
    ];

    props.forEach((prop) => expect(book).toHaveProperty(prop));
  });
});
