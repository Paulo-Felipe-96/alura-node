const request = require("supertest");
const app = require("../../../app");
const { succeededScenariosForGet } = require("../mocks/SuccessTestCasesMock");

describe("Well succeeded Router test cases for Livros, Editoras and Autores", () => {
  test.each(succeededScenariosForGet)("$title", async ({ path }) => {
    await request(app)
      .get(path)
      .set({
        Accept: "application/json",
        Authorization: "9e788a-9228e934cbb2-af876b2694e591",
      })
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200);
  });
});
