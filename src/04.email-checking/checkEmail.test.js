const { checkEmail } = require("./checkEmail.js");

describe("Email verifications:", () => {
  test("checkEmail function should check for the correct format", () => {
    expect(checkEmail("example@gmail.com")).toBe(true);
    expect(checkEmail("example@gmail")).toBe(false);
    expect(checkEmail("@.com")).toBe(false);
    expect(checkEmail(12)).toBe(false);
    expect(checkEmail(null)).toBe(false);
  });
});
