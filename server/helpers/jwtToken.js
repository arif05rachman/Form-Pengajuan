const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  return jwt.sign(payload, "$3cr3T");
};

const verifyToken = (token) => {
  return jwt.verify(token, "$3cr3T");
};

module.exports = {
  generateToken,
  verifyToken,
};
