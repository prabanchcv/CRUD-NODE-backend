const { deleteOne } = require("../../repositories/userRepository");

async function adminDeleteUser(_id) {
  const response = await deleteOne(_id);
  return response;
}

module.exports = { adminDeleteUser };
