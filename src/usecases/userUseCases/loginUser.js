const { findUserByEmail } = require("../../repositories/userRepository");
const { matchPassword } = require("../../services/bcrypt");
const { generateAuthToken } = require("../../middlewares/auth");

async function loginUser(email, password) {
  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    const isMatch = await matchPassword(password, existingUser.password);
    if (isMatch) {
      const token = generateAuthToken(existingUser);
      return { userData: existingUser, token };
    } else {
      throw new Error("Password Not Match");
    }
  } else {
    throw new Error("User not found");
  }
}

module.exports = { loginUser };
