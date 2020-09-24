const jwt = require("jsonwebtoken");

// Make sure the user is logged in - Authencation
const loginRequired = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
      if (decode) {
        return next();
      } else {
        return next({ status: 401, message: "Please Log in First" });
      }
    });
  } catch (e) {
    return next({ status: 401, message: "Please Log in First" });
  }
};

// Make sure we got the correct user - Authorization
const ensureCorrectUser = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
      if (decode && decode.id === req.params.id) {
        return next();
      } else {
        return next({ status: 401, message: "Unauthorized" });
      }
    });
  } catch (e) {
    return next({ status: 401, message: "Unauthorized" });
  }
};

module.exports = { loginRequired, ensureCorrectUser };
