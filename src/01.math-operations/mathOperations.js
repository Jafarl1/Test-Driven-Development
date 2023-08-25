const sum = (a, b) =>
  !isNaN(a) && !isNaN(b) ? a + b : "Parameters are invalid.";

const subtract = (a, b) =>
  !isNaN(a) && !isNaN(b) ? a - b : "Parameters are invalid.";

const multiply = (a, b) =>
  !isNaN(a) && !isNaN(b) ? a * b : "Parameters are invalid.";

const divide = (a, b) =>
  !isNaN(a) && !isNaN(b) && b !== 0 ? a / b : "Parameters are invalid.";

module.exports = { sum, subtract, multiply, divide };
