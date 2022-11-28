const Author = require("../../Author");

describe("Author's model tests", () => {
  const authorObj = {
    nome: "Cathy O'Neil II",
    nascionalidade: "Americana",
  };

  it("should instances a new author", () => {
    const author = new Author(authorObj);

    expect(author).toEqual(expect.objectContaining(authorObj));
  });

  it("should have props: id, name and nationality", () => {
    const author = new Author(authorObj);
    const props = ["id", "nome", "nascionalidade"];

    props.forEach((prop) => expect(author).toHaveProperty(prop));
  });
});
