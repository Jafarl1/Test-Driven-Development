const convertCurrency = (currency, rate) => {
  if ([currency, rate].every((n) => typeof n === "number" && n > 0))
    return currency * rate;
  throw new Error("Parameters are missing or invalid.");
};

module.exports = { convertCurrency };
