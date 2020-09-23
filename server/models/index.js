const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://locahost:27017/warbler", {
  useCreateIndex: true,
  useNewUrlParser: true,
  keepAlive: true,
  useMongoClient: true,
  useUnifiedTopology: true,
});
