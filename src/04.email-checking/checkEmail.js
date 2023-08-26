const checkEmail = (email) =>
  typeof email === "string" &&
  email.includes("@") &&
  email.endsWith(".com") &&
  email.split(/[@ .]/).every((n) => n);

module.exports = { checkEmail };
