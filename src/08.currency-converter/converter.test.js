const { convertCurrency } = require("./converter.js");

describe("convertCurrency function:", () => {
  test("should return correct value", () => {
    expect(convertCurrency(100, 1.7)).toBe(170);
    expect(convertCurrency(50, 1.2)).toBe(60);
  });

  test("should throw an error if parameters are missing or invalid", () => {
    expect(() => {
      convertCurrency(null, -1);
    }).toThrow("Parameters are missing or invalid.");

    expect(() => {
      convertCurrency(10);
    }).toThrow("Parameters are missing or invalid.");
  });
});
