// routes/auth.js

const express = require('express');
const { signin, register, logout, signinWithGoogle, protectedExample } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router();

router.post('/login', signin);
router.post('/register', register);
router.post('/login/google', signinWithGoogle); 
router.post('/logout', authMiddleware, logout);
router.get('/protected-route', authMiddleware, protectedExample);

module.exports = router;