// REQUIREMENTS
require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const errorHandler = require("./handlers/error");
const { loginRequired, ensureCorrectUser } = require("./middlewares/auth");
const db = require("./models");

// require routes
const authRoutes = require("./routes/auth");
const msgsRoutes = require("./routes/messages");

const app = express();

// MIDDLEWARES
app.use(cors());
app.use(logger("common"));
app.use(express.json());

// ROUTE UNMOUNTS
app.use("/api/auth", authRoutes);
app.use(
  "/api/users/:id/messages",
  loginRequired,
  ensureCorrectUser,
  msgsRoutes
);

app.get("/api/messages", loginRequired, async (req, res, next) => {
  try {
    const messages = await db.Message.find()
      .sort({ createdAt: "desc" })
      .populate("user", {
        username: true,
        profileImageUrl: true,
      });
    return res.status(200).json(messages);
  } catch (error) {
    next(error);
  }
});

app.use((req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

// LISTENERS
app.listen(process.env.PORT || 4242, () =>
  console.log("Warbler's server has started")
);
