const express = require('express');
const router = express.Router();

const isLoggedIn = require("../middleware/isLoggedIn");
/* GET home page */
router.get("/", /*isLoggedIn,*/ async (req, res, next) => {
  const currentUser = req.session.currentUser
  res.render('index', { currentUser });
});

module.exports = router;
