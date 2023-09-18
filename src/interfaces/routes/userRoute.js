// userRoute.js

const express = require("express");
const { upload } = require("../../middlewares/multer");
const {
  userSignup,
  userLogin,
  profile,
  profileUpdate,
} = require("../controllers/userController");
const { verifyToken } = require("../../middlewares/auth");

const userRoute = express.Router();

userRoute.post("/register", upload.single("image"), userSignup);
userRoute.get("/login", userLogin);
userRoute.get("/profile", verifyToken, profile);
userRoute.patch("/profile-update", upload.single("image"), verifyToken, profileUpdate);

module.exports = userRoute;
