const { adminLogin } = require("../../usecases/adminUseCases/adminLogin");
const { getUsers } = require("../../usecases/adminUseCases/getUsers");
const { getUpdateUser } = require("../../usecases/adminUseCases/getUpdateUser");
const { adminUpdateUser } = require("../../usecases/adminUseCases/updateUser");
const { adminDeleteUser } = require("../../usecases/adminUseCases/deleteUser");

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const adminData = await adminLogin(email, password);
    res.json(adminData);
  } catch (error) {
    throw new Error("Something error happened");
  }
};

const loadDashboard = async (req, res) => {
  try {
    const userData = await getUsers();
    res.json(userData);
  } catch (error) {
    throw new Error("Something error happened");
  }
};

const findUpdateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    console.log(userId, "idddd");
    const userData = await getUpdateUser(userId);
    res.json(userData);
  } catch (error) {
    throw new Error("Something error happened");
  }
};

const updateUser = async (req, res) => {
  try {
    const { username, email, mobile } = req.body;
    const image = req.file?.filename;
    const response = await adminUpdateUser(username, email, mobile, image);
    res.json(response);
  } catch (error) {
    res.json({ message: "Couldn't Update the User" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await adminDeleteUser(id);
    res.json(response);
  } catch (error) {
    res.json({ message: "Couldn't delete the user" });
  }
};

module.exports = { loginAdmin, loadDashboard, findUpdateUser, updateUser, deleteUser };
