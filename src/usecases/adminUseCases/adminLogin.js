const { findAdmin } = require("../../repositories/adminRepository");
const { generateadminToken } = require('../../middlewares/auth');

async function adminLogin(email, password) {
  const adminData = await findAdmin(email, password);
  if (adminData && adminData.password === password) {
    const adminToken = generateadminToken(adminData);
    return { adminData, adminToken };
  } else {
    console.log(adminData?.password, password);
    return { message: "password not match" };
  }
}

module.exports = { adminLogin };
