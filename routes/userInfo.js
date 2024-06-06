//routes/userInfo.js

const express = require('express');
const router = express.Router();
const userInfoController = require('../controllers/userInfoController');
const authMiddleware = require('../middleware/authMiddleware')

router.use(authMiddleware);
router.post('/profile', userInfoController.addProfile);
router.put('/profile', userInfoController.updateProfile);
router.post('/profile/photo', userInfoController.uploadProfilePicture);
router.get('/profile', userInfoController.getAllProfiles);

module.exports = router;
