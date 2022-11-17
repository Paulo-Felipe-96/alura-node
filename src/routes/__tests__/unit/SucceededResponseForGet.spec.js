const request = require("supertest");
const app = require("../../../app");
const {
  succeededScenariosForGet,
} = require("../mocks/SucceededResponseForGetMock");

describe("GET all base endpoints for for Livros, Editoras and Autores", () => {
  test.each(succeededScenariosForGet)(
    "$title",
    async ({ path }) => {
      await request(app)
        .get(path)
        .set("Accept", "application/json")
        .expect("Content-Type", "application/json; charset=utf-8")
        .expect(200);
    },
  );
});
