const { createUser } = require('../../usecases/userUseCases/createUser');
const { loginUser } = require('../../usecases/userUseCases/loginUser');
const { findUser } = require('../../usecases/userUseCases/findUser');
const { updateUser } = require('../../usecases/userUseCases/updateUser');

const userSignup = async (req, res) => {
  try {
    const { username, email, mobile, password } = req.body;
    const image = req.file?.filename;
    const userData = await createUser(username, email, mobile, password, image);
    console.log(userData);
    res.status(201).json(userData);
  } catch (error) {
    console.error(error);
    res.json({ message: error.message });
  }
};

const userLogin = async (req, res) => {
  try {
    const email = req.query.email?.toString();
    const password = req.query.password?.toString();
    console.log(email, password);
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    const response = await loginUser(email, password);
    const { userData, token } = response;
    res.json({ userData, token });
  } catch (error) {
   res.json(error.message)
  }
};

const profile = async (req, res) => {
  try {
    const email = req.query.email?.toString();
    if (!email) {
      return res.status(400).json({ message: 'Something Error' });
    }
    const userData = await findUser(email);
    res.json(userData);
  } catch (error) {
    throw new Error(error.message);
  }
};

const profileUpdate = async (req, res) => {
  try {
    const { username, email, mobile } = req.body;
    console.log(req.body);
    const image = req.file?.filename;
    const userEmail = req.query.userEmail?.toString();
    if (!userEmail) {
      return res.status(400).json({ message: 'No email provided' });
    }
    const userData = await updateUser(username, email, mobile, image, userEmail);
    res.json(userData);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { userSignup, userLogin, profile, profileUpdate };
