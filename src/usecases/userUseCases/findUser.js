const { findUserByEmail } = require("../../repositories/userRepository");

async function findUser(email) {
  const userData = await findUserByEmail(email);
  return userData;
}

module.exports = { findUser };
