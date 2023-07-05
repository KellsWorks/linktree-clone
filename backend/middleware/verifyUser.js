const db = require('../models');
const User = db.user;

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    const existingUser = await User.findOne({ username: req.body.username }).exec();
    if (existingUser) {
      return res.status(400).send({ message: 'Failed! Username is already in use!' });
    }

    const existingEmail = await User.findOne({ email: req.body.email }).exec();
    if (existingEmail) {
      return res.status(400).send({ message: 'Failed! Email is already in use!' });
    }

    next();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const verifyUser = {
  checkDuplicateUsernameOrEmail
};

module.exports = verifyUser;
