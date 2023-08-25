const { textReverse } = require("./textOperations.js");

describe("Text operatons:", () => {
  test("textReverse function should reverse the text", () => {
    expect(textReverse("Hello world!")).toBe("!dlrow olleH");
    expect(textReverse("")).toBe("Parameter is an empty string.");
    expect(textReverse("   ")).toBe("Parameter is an empty string.");
    expect(textReverse(25)).toBe(`Parameter [ ${25} ] is not a text format.`);
  });
});
