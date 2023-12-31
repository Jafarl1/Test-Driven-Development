const getEvenNumbers = (array) => {
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error("Parameter is empty or is not an array.");
  }
  
  return array.filter((n) => typeof n === "number" && n % 2 === 0);
};

module.exports = { getEvenNumbers };
