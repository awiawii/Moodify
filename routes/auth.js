// routes/auth.js

const express = require('express');
const { signin, register, logout, signinWithGoogle } = require('../controllers/authController');

const router = express.Router();

router.post('/login', signin);
router.post('/register', register);
router.post('/login/google', signinWithGoogle); 
router.post('/logout', logout);

module.exports = router;