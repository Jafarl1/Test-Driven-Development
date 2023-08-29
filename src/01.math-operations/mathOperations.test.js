const { sum, subtract, multiply, divide } = require("./mathOperations.js");

describe("Math operations:", () => {
  describe("Sum function:", () => {
    test("should be defined", () => {
      expect(sum(2, 3)).toBeDefined();
    });

    test("should return correct value with integers", () => {
      expect(sum(2, 3)).toBe(5);
      expect(sum(2, -3)).toBe(-1);
    });

    test("should return correct value with float numbers", () => {
      expect(sum(1.1, 2.2)).toBeCloseTo(3.3);
      expect(sum(1.2, -2.3)).toBeCloseTo(-1.1);
    });

    test("should throw an error if parameters types are invalid", () => {
      expect(() => {
        sum(3, null);
      }).toThrow("Parameters are invalid.");
      expect(() => {
        sum("a", null);
      }).toThrow("Parameters are invalid.");
    });
  });

  describe("Subtract function:", () => {
    test("should be defined", () => {
      expect(subtract(2, 3)).toBeDefined();
    });

    test("should return correct value with integers", () => {
      expect(subtract(5, 3)).toBe(2);
      expect(subtract(2, -3)).toBe(5);
    });

    test("should return correct value with float numbers", () => {
      expect(subtract(3.3, 1.1)).toBeCloseTo(2.2);
      expect(subtract(1.2, -2.3)).toBeCloseTo(3.5);
    });

    test("should throw an error if parameters types are invalid", () => {
      expect(() => {
        subtract(3, null);
      }).toThrow("Parameters are invalid.");
      expect(() => {
        subtract("a", null);
      }).toThrow("Parameters are invalid.");
    });
  });

  describe("Multiply function:", () => {
    test("should be defined", () => {
      expect(multiply(2, 3)).toBeDefined();
    });

    test("should return correct value with integers", () => {
      expect(multiply(5, 3)).toBe(15);
      expect(multiply(2, -3)).toBe(-6);
    });

    test("should return correct value with float numbers", () => {
      expect(multiply(3.3, 1.1)).toBeCloseTo(3.63);
      expect(multiply(1.2, -2.3)).toBeCloseTo(-2.76);
    });

    test("should throw an error if parameters types are invalid", () => {
      expect(() => {
        multiply(3, null);
      }).toThrow("Parameters are invalid.");
      expect(() => {
        multiply("a", null);
      }).toThrow("Parameters are invalid.");
    });
  });

  describe("Divide function:", () => {
    test("should be defined", () => {
      expect(divide(2, 3)).toBeDefined();
    });

    test("should return correct value with integers", () => {
      expect(divide(4, 2)).toBe(2);
      expect(divide(9, -3)).toBe(-3);
    });

    test("should return correct value with float numbers", () => {
      expect(divide(1.32, 1.2)).toBeCloseTo(1.1);
      expect(divide(1.32, -1.2)).toBeCloseTo(-1.1);
    });

    test("should throw an error if parameters types are invalid", () => {
      expect(() => {
        divide(3, null);
      }).toThrow("Parameters are invalid.");
      expect(() => {
        divide("a", null);
      }).toThrow("Parameters are invalid.");
      expect(() => {
        divide(3, 0);
      }).toThrow("Parameters are invalid.");
    });
  });
});
