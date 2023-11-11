const express = require('express');
const router = express.Router();

const isLoggedIn = require("../middleware/isLoggedIn");
/* GET home page */
router.get("/", isLoggedIn, async (req, res, next) => {
  res.render('index');
});

module.exports = router;
