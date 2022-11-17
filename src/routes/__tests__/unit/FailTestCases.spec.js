const request = require("supertest");
const app = require("../../../app");
const { badScenariosForDelete, badScenariosForPost } = require("../mocks/FailTestCasesMock");

describe("Router test cases for fails in Livros, Editoras and Autores", () => {
  test.each(badScenariosForDelete)("$title", async ({ path }) => {
    await request(app)
      .delete(path)
      .set("Accept", "application/json")
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect(404);
  });

  test.each(badScenariosForPost)("$title", async ({ path }) => {
    await request(app)
      .post(path)
      .set("Accept", "application/json")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(500);
  });
});
