const { getEvenNumbers } = require("./arrayOperations.js");

describe("getEvenNumbers function:", () => {
  test("should return even numbers from array", () => {
    expect(getEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    expect(getEvenNumbers([1, 2, undefined, 4, "hello", [6], true, 8])).toEqual(
      [2, 4, 8]
    );
  });

  test("should throw an error if parameter is empty or is not an array.", () => {
    expect(() => {
      getEvenNumbers([]);
    }).toThrow("Parameter is empty or is not an array.");
    expect(() => {
      getEvenNumbers(null);
    }).toThrow("Parameter is empty or is not an array.");
  });
});
