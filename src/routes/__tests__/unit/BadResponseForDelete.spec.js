const request = require("supertest");
const app = require("../../../app");
const {
  badScenariosForDelete,
} = require("../mocks/BadResponseForDeleteMock");

describe("GET all base endpoints with 404 status_code for Livros, Editoras and Autores", () => {
  test.each(badScenariosForDelete)(
    "$title",
    async ({ path }) => {
      await request(app)
        .delete(path)
        .set("Accept", "application/json")
        .expect("Content-Type", "text/html; charset=utf-8")
        .expect(404);
    },
  );
});
