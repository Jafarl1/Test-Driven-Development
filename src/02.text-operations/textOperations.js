const textReverse = (text) => {
  if (typeof text === "string" && text.trim()) {
    return text.split("").reverse().join("");
  } else if (typeof text === "string" && text.trim() === "") {
    return "Parameter is an empty string.";
  } else {
    return `Parameter [ ${text} ] is not a text format.`;
  }
};

module.exports = { textReverse };
