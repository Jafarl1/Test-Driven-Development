const getDaysDifference = (date1, date2) => {
  if (date1 instanceof Date && date2 instanceof Date) {
    return Math.abs(date2 - date1) / 86400000;
  } else {
    throw new Error("Parameters are invalid.");
  }
};

module.exports = { getDaysDifference };
