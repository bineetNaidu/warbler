const db = require("../models");

const createMessage = async (req, res, next) => {
  try {
    // create a message
    const message = await db.Message.create({
      text: req.body.text,
      user: req.params.id,
    });

    // push the msg id to user models messages array
    const foundUser = await db.User.findById(req.params.id);
    foundUser.messages.push(message.id);
    await foundUser.save();

    // return the MSG
    const foundMsg = await (await db.Message.findById(message._id)).populate(
      "user",
      {
        username: true,
        profileImageUrl: true,
      }
    );

    return res.status(200).json(foundMsg);
  } catch (err) {
    return next(err);
  }
};

const editMessage = (req, res, next) => {};

const deleteMessage = (req, res, next) => {};

module.exports = { createMessage, editMessage, deleteMessage };
