const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.config');

module.exports = {
  ensureAuth: function (req, res, next) {

    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'No token provided.' });
    }

    jwt.verify(token, authConfig.secret, function (err, decoded) {
      if (err) {
        return res.status(403).json({ message: token });
      }

      req.user = decoded.id;

      next();
    });
  },
  ensureGuest: function (req, res, next) {
    if (req.isAuthenticated()) {
      res.redirect("/dashboard");
    } else {
      return next();
    }
  },
};
