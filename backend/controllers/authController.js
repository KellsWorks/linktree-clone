const config = require("../config/auth.config");
const db = require("../models/user");
const Profile = require("../models/profile");
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

    await user.save()
    

    await Profile.create({
       user,
       backgroundColor:"Green",
       ButtonColor:"Green",
       Logo:"test logo",
       Headline:"This is my linktree account",
    });
    
    res.status(201).json({"message":"successfully created account"});
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
