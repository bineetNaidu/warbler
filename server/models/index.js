const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect(
  "mongodb://localhost:27017/warbler",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    keepAlive: true,
    useUnifiedTopology: true,
  },
  () => console.log("Warbler DB started...")
);

// EXPORTS
module.exports.User = require("./User");
module.exports.Message = require("./Message");
