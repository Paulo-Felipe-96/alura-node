const handleError = require("../../handleError");

describe("Handle Error's tests", () => {
  it("should throw an error when called", () => {
    expect(() => { handleError(); }).toThrowError();
  });
});
