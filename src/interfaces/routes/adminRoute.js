// adminRoute.js

const express = require("express");
const { upload } = require("../../middlewares/multer");
const {
  loginAdmin,
  loadDashboard,
  findUpdateUser,
  updateUser,
  deleteUser,
} = require("../controllers/adminController");

const adminRoute = express.Router();

adminRoute.post("/login", loginAdmin);
adminRoute.get("/loadDashboard", loadDashboard);
adminRoute.get("/editUser/:id", findUpdateUser);
adminRoute.put("/updateUser/:id", upload.single("image"), updateUser);
adminRoute.delete("/deleteUser/:id", deleteUser);

module.exports = adminRoute;
