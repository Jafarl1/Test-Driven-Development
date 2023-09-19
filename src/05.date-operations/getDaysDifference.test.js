const { getDaysDifference } = require("./getDaysDifference.js");

describe("getDaysDifference function:", () => {
  test("should be defined", () => {
    expect(
      getDaysDifference(new Date(2023, 8, 1), new Date(2023, 8, 9))
    ).toBeDefined();
  });

  test("should return difference between 2 dates", () => {
    expect(getDaysDifference(new Date(2023, 8, 1), new Date(2023, 8, 9))).toBe(
      8
    );
  });

  test("should return an error if parameters types are invalid", () => {
    expect(() => {
      getDaysDifference(1, new Date(2023, 8, 10));
    }).toThrow("Parameters are invalid.");
    expect(() => {
      getDaysDifference(new Date(2023, 8, 10), "str");
    }).toThrow("Parameters are invalid.");
    expect(() => {
      getDaysDifference(new Date(2023, 8, 10), null);
    }).toThrow("Parameters are invalid.");
  });
});
