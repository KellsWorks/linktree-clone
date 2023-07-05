const config = require("../config/auth.config");
const db = require("../models/user");
const User = db;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });

    user.save()
    .then((result) => {
        res.status(200).json({
            message: "User was registered successfully!",
            user: user
        })
    })
    .catch((err) => {
        res.status(400).json({ message: err.message });
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.login = (req, res) => {
    User.findOne({ username: req.body.username })
      .then((user) => {
        if (!user) {
          return res.status(400).send({ message: "User not found." });
        }

        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );

        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!",
          });
        }

        const token = jwt.sign({ id: user.id }, config.secret, {
          algorithm: "HS256",
          allowInsecureKeySizes: true,
          expiresIn: 86400,
        });

        res.status(200).send({
          id: user._id,
          username: user.username,
          email: user.email,
          accessToken: token,
        });
      })
      .catch((err) => {
        res.status(400).send({ message: err.message });
      });
  };
