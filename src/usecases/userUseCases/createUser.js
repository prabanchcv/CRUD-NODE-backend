const { saveUser, findUserByEmail } = require("../../repositories/userRepository");
const { securePassword } = require('../../services/bcrypt');
const { formatDate } = require("../../services/moment");

async function createUser(username, email, mobile, password, image) {
  const existingUser = await findUserByEmail(email);
  if (!existingUser) {
    const securedPassword = await securePassword(password);
    const formattedDate = await formatDate(Date.now());
    return await saveUser(username, email, mobile, securedPassword, image, formattedDate);
  } else {
    throw new Error("Email already exists in the database");
  }
}

module.exports = { createUser };
