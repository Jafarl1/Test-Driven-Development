const { getDaysDifference } = require("./getDaysDifference.js");

describe("Date operations:", () => {
  test("getDaysDifference function should return difference between 2 dates", () => {
    expect(getDaysDifference(new Date(2023, 8, 1), new Date(2023, 8, 9))).toBe(8);
    expect(getDaysDifference(1, new Date(2023, 8, 10))).toBe("Wrong format");
    expect(getDaysDifference(new Date(2023, 8, 10), "str")).toBe("Wrong format");
    expect(getDaysDifference(new Date(2023, 8, 10), null)).toBe("Wrong format");
  });
});
