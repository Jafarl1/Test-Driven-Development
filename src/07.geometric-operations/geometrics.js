const calculateTriangleArea = (a, b, c) => {
  if (
    [a, b, c].every((n) => typeof n === "number" && n > 0) &&
    a + b > c &&
    a + c > b &&
    b + b > a
  ) {
    const p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
  } else {
    throw new Error("Parameters are invalid.");
  }
};

module.exports = { calculateTriangleArea };
