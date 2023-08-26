const { getEvenNumbers } = require("./arrayOperations.js");

describe("Array operations:", () => {
  test("getEvenNumber function should return even numbers from array", () => {
    expect(getEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    expect(getEvenNumbers([1, 2, undefined, 4, "hello", [6], true, 8])).toEqual(
      [2, 4, 8]
    );
    expect(getEvenNumbers([])).toBe("Parameter is empty or is not an array.");
    expect(getEvenNumbers(null)).toEqual(
      "Parameter is empty or is not an array."
    );
  });
});
