const { checkEmail } = require("./checkEmail.js");

describe("checkEmail function:", () => {
  test("should check for the correct format", () => {
    expect(checkEmail("example@gmail.com")).toBe(true);
  });

  test("should throw an error for invalid format", () => {
    expect(() => {
      checkEmail("example@gmail");
    }).toThrow("Email is invalid.");
    expect(() => {
      checkEmail("@.com");
    }).toThrow("Email is invalid.");
    expect(() => {
      checkEmail(12);
    }).toThrow("Email is invalid.");
    expect(() => {
      checkEmail(null);
    }).toThrow("Email is invalid.");
  });
});
