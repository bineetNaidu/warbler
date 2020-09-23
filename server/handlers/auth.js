const db = require("../models");
const jwt = require("jsonwebtoken");

const signup = async (req, res, next) => {
  try {
    // create  a new user
    let { id, username, profileImageUrl } = await db.User.create(req.body);
    // create a jwt token ( signin token )
    let token = jwt.sign(
      { id, username, profileImageUrl },
      process.env.SECRET_KEY
    );
    return res.status(200).json({ id, username, token });
  } catch (err) {
    // what kind of err
    // is it certain err
    if (err.code === 11000) {
      // res with username/password is already taken
      err.message = "Sorry!, username/email is already taken...";
    }
    // else res W/ 400 status
    return res.status(400).json({ status: 400, message: err.message });
  }
};

const signin = async (req, res, next) => {
  try {
    // find the user
    const user = await db.User.findOne({ email: req.body.email });
    const { id, username, profileImageUrl } = user;
    // check if their password matches that was sent to the server
    let isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
      // if it all matches
      let token = jwt.sign(
        { id, username, profileImageUrl },
        process.env.SECRET_KEY
      );
      // then login
      return res.status(200).json({ id, username, profileImageUrl, token });
    } else {
      return next({
        status: 400,
        message: "Invalid Email/Password Provided...",
      });
    }
  } catch (err) {
    return next({
      status: 400,
      message: "Invalid Email/Password Provided...",
    });
  }
};

module.exports = { signup, signin };
