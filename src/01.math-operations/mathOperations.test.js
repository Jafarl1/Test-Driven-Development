const { sum, subtract, multiply, divide } = require("./mathOperations.js");

describe("Math operations:", () => {
  test("Sum function should return correct value", () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(2, -3)).toBe(-1);
    expect(sum(1.1, 2.2)).toBeCloseTo(3.3);
    expect(sum("a", null)).toBe("Parameters are invalid.");
  });

  test("Subtract function should return correct value", () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(5, -3)).toBe(8);
    expect(subtract(1.1, 2.2)).toBeCloseTo(-1.1);
    expect(subtract("a", null)).toBe("Parameters are invalid.");
  });

  test("Multiply function should return correct value", () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(3, -4)).toBe(-12);
    expect(multiply(1.1, 2.2)).toBeCloseTo(2.42);
    expect(multiply("a", null)).toBe("Parameters are invalid.");
  });

  test("Divide function should return correct value", () => {
    expect(divide(4, 2)).toBe(2);
    expect(divide(4, -2)).toBe(-2);
    expect(divide(0, 4)).toBe(0);
    expect(divide(4.4, 2)).toBeCloseTo(2.2);
    expect(divide("a", null)).toBe("Parameters are invalid.");
  });
});
