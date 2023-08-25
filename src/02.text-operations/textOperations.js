const textReverse = (text) => {
  return typeof text === "string" && text.trim()
    ? text.split("").reverse().join("")
    : typeof text === "string" && text.trim() === ""
    ? "Parameter is an empty string."
    : `Parameter [ ${text} ] is not a text format.`;
};

module.exports = { textReverse };
