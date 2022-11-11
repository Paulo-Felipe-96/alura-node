const throwError = require("../../throwError");

describe("Handle Error's tests", () => {
  it("should throw an error when called", () => {
    expect(() => { throwError(); }).toThrowError();
  });
});
