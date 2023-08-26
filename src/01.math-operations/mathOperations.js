const sum = (a, b) =>
  typeof a === "number" && typeof b === "number"
    ? a + b
    : "Parameters are invalid.";

const subtract = (a, b) =>
  typeof a === "number" && typeof b === "number"
    ? a - b
    : "Parameters are invalid.";

const multiply = (a, b) =>
  typeof a === "number" && typeof b === "number"
    ? a * b
    : "Parameters are invalid.";

const divide = (a, b) =>
  typeof a === "number" && typeof b === "number" && b !== 0
    ? a / b
    : "Parameters are invalid.";

module.exports = { sum, subtract, multiply, divide };
