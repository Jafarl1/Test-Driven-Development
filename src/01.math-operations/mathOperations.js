const checkParamsTypes = (...params) => {
  return params.every((param) => typeof param === "number");
};

const sum = (a, b) => {
  if (checkParamsTypes(a, b)) {
    return a + b;
  } else {
    throw new Error("Parameters are invalid.");
  }
};

const subtract = (a, b) => {
  if (checkParamsTypes(a, b)) {
    return a - b;
  } else {
    throw new Error("Parameters are invalid.");
  }
};

const multiply = (a, b) => {
  if (checkParamsTypes(a, b)) {
    return a * b;
  } else {
    throw new Error("Parameters are invalid.");
  }
};

const divide = (a, b) => {
  if (checkParamsTypes(a, b) && b !== 0) {
    return a / b;
  } else {
    throw new Error("Parameters are invalid.");
  }
};

module.exports = { sum, subtract, multiply, divide };
