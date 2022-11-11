const throwError = require("../../throwError");

describe("Throw Error's tests", () => {
  it("should throw an error when called", () => {
    expect(() => throwError()).toThrowError();
  });
});
