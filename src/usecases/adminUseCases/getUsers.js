const { getAllUsers } = require("../../repositories/adminRepository");

const getUsers = async () => {
  const userData = await getAllUsers();
  return userData;
};

module.exports = { getUsers };
