const { updateUser } = require("../../repositories/adminRepository");

async function adminUpdateUser(username, email, mobile, image) {
  const userData = await updateUser(username, email, mobile, image);
  return userData;
}

module.exports = { adminUpdateUser };
