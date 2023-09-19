const { calculateTriangleArea } = require("./geometrics");

describe("calculateTriangleArea function:", () => {
  test("should return triangle's area", () => {
    expect(calculateTriangleArea(3, 4, 5)).toBe(6);
    expect(calculateTriangleArea(6, 8, 10)).toBe(24);
  });

  test("should throw an error if the parameters are missing or invalid", () => {
    expect(() => {
      calculateTriangleArea(3, 4);
    }).toThrow("Parameters are invalid.");

    expect(() => {
      calculateTriangleArea(3, 4, null);
    }).toThrow("Parameters are invalid.");

    expect(() => {
      calculateTriangleArea(0, 2, 2);
    }).toThrow("Parameters are invalid.");

    expect(() => {
      calculateTriangleArea(0, -2, -2);
    }).toThrow("Parameters are invalid.");
  });
});
