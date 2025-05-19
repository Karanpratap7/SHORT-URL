const express = require('express');
const { handleUserSignup, handleUserLogin } = require('../controllers/user');

const router = express.Router();

router.post('/signup', handleUserSignup);
router.get('/signup', (req, res) => {
    res.render("signup");  // assuming you have a signup.ejs view
  });

router.post("/login", handleUserLogin);

module.exports = router;