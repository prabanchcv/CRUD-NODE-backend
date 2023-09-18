const bcrypt = require('bcrypt');

async function securePassword(password) {
  return await bcrypt.hash(password, 10);
}

async function matchPassword(passwordOne, passwordTwo) {
  return await bcrypt.compare(passwordOne, passwordTwo);
}

module.exports = { securePassword, matchPassword };
