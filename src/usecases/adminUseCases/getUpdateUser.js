const { findUpdateUser } = require("../../repositories/adminRepository");

async function getUpdateUser(_id) {
  const userData = await findUpdateUser(_id);
  return userData;
}

module.exports = { getUpdateUser };
