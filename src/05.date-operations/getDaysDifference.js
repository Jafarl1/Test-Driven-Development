const getDaysDifference = (date1, date2) =>
  date1 instanceof Date && date2 instanceof Date
    ? Math.abs(date2 - date1) / 86400000
    : "Wrong format";

module.exports = { getDaysDifference };
