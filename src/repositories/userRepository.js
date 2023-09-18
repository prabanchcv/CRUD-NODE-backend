const userModel = require("../entities/userModel");

async function saveUser(username, email, mobile, password, image, date) {
  const user = new userModel({ username, email, mobile, password, image, date });
  return await user.save();
}

async function findUserByEmail(email) {
  const userData = await userModel.findOne({ email });
  return userData;
}

async function updateOne(username, email, mobile, image) {
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

async function deleteOne(_id) {
  const response = await userModel.findByIdAndDelete(_id);
  if (response) {
    return response;
  } else {
    return { message: "User not found" };
  }
}

module.exports = { saveUser, findUserByEmail, updateOne, deleteOne };
