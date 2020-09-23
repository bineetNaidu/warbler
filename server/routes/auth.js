const router = require("express").Router();
const { signup } = require("../handlers/auth");

router.post("/signup", signup);

module.exports = router;
