const { verifyUser } = require("../middleware");
const controller = require("../controllers/authController");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/register",
    [
        (req, res, next) => verifyUser.checkDuplicateUsernameOrEmail(req, res, next)
      ],
    controller.register
  );

  app.post("/api/auth/login", controller.login);
};
