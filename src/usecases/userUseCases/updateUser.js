const { findUserByEmail, updateOne } = require("../../repositories/userRepository");
const { securePassword } = require("../../services/bcrypt");

async function updateUser(username, email, mobile, image, userEmail) {
  try {
    const existingUser = await findUserByEmail(userEmail);

    if (existingUser) {
      const userData = await updateOne(username, email, mobile, image);
      return userData;
    }
  } catch (error) {
    throw new Error("User not found");
  }
}

module.exports = { updateUser };
