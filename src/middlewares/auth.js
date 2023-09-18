const Jwt = require('jsonwebtoken');
const { UserInterface } = require('../entities/userModel');
const { AdminInterface } = require('../entities/adminModel');

function generateAuthToken(existingUser) {
  const { _id, username, email, mobile, image } = existingUser;
  const jwtSecretKey = "t9rXw5bF2mS7zQ8p";
  const token = Jwt.sign({ _id, username, email, mobile, image }, jwtSecretKey);
  return token;
}

function generateadminToken(adminData) {
  const { email } = adminData;
  const jwtSecretKey = "t9rXw5bF2mS7zQ8p";
  const token = Jwt.sign({ email }, jwtSecretKey);
  return token;
}

async function verifyToken(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    Jwt.verify(token, 't9rXw5bF2mS7zQ8p');
    
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: 'Invalid token' });
  }
}

module.exports = { generateAuthToken, generateadminToken, verifyToken };
