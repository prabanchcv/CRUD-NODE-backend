const adminModel = require("../entities/adminModel");
const userModel = require("../entities/userModel");

async function findAdmin(email, password) {
  const adminData = await adminModel.findOne({ email });
  return adminData;
}

async function getAllUsers() {
  return await userModel.find().lean();
}

async function findUpdateUser(_id) {
  const userData = await userModel.findById(_id);
  return userData;
}

async function updateUser(username, email, mobile, image) {
  const userData = await userModel.findOneAndUpdate(
    { email },
    {
      $set: {
        username,
        email,
        mobile,
        image,
      },
    },
    { new: true }
  );
  return userData;
}

module.exports = { findAdmin, getAllUsers, findUpdateUser, updateUser };
