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

    expect(publisher).toHaveProperty("id");
    expect(publisher).toHaveProperty("nome");
  });

  it("should save a new object into database", async () => {
    const publisher = new Publisher(publisherObj);
    const data = await publisher.save();
    const response = await Publisher.findById(data.id);

    expect(response).toEqual(
      expect.objectContaining({ _id: expect.any(String), ...publisher }),
    );
  });
});
