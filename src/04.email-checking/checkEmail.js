const checkEmail = (email) => {
  if (
    typeof email === "string" &&
    email.includes("@") &&
    email.endsWith(".com") &&
    email.split(/[@ .]/).every((n) => n)
  ) {
    return true;
  } else {
    throw new Error("Email is invalid.");
  }
};

module.exports = { checkEmail };
