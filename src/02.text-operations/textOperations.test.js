const { textReverse } = require("./textOperations.js");

describe("textReverse function:", () => {
  test("should be defined", () => {
    expect(textReverse("Hello world!")).toBeDefined();
  });

  test("should reverse the text", () => {
    expect(textReverse("Hello world!")).toBe("!dlrow olleH");
  });

  test("should throw an error for empty parameter", () => {
    expect(textReverse("")).toBe("Parameter is an empty string.");
    expect(textReverse("   ")).toBe("Parameter is an empty string.");
  });

  test("should throw an error for wrong parameter type", () => {
    expect(textReverse(25)).toBe(`Parameter [ ${25} ] is not a text format.`);
    expect(textReverse(null)).toBe(
      `Parameter [ ${null} ] is not a text format.`
    );
  });
});
