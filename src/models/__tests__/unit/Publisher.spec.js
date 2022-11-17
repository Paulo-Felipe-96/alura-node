const Publisher = require("../../Publisher");

describe("Publisher's model tests", () => {
  const publisherObj = {
    nome: "Casa do Código",
  };

  it("should instances a new publisher", () => {
    const publisher = new Publisher(publisherObj);

    expect(publisher).toEqual(expect.objectContaining(publisherObj));
  });

  it("should have props: id and name", () => {
    const publisher = new Publisher(publisherObj);
    const props = ["id", "nome"];

    props.forEach((prop) => expect(publisher).toHaveProperty(prop));
  });
});
