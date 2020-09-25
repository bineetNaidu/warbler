const mongoose = require("mongoose");
const User = require("./User");

const MessageSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      maxlength: 160,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

MessageSchema.pre("remove", async function (next) {
  try {
    // find a user
    const user = await User.findById(this.user);
    // remove the data on the users messages Array
    user.messages.remove(this.id);
    // save that user
    await user.save();
    // return
    return next();
  } catch (err) {
    return next(err);
  }
});

module.exports = mongoose.model("Message", MessageSchema);
