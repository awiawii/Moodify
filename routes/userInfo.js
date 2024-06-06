//routes/userInfo.js

const express = require('express');
const router = express.Router();
const userInfoController = require('../controllers/userInfoController');
const authMiddleware = require('../middleware/authMiddleware')

router.use(authMiddleware);
// Endpoint untuk menambahkan data diri pengguna
router.post('/addProfile', userInfoController.addProfile);
// Endpoint untuk mengubah data diri pengguna
router.put('/updateProfile', userInfoController.updateProfile);
// Endpoint untuk upload profile pic
router.post('/upload-profile-picture/:uid', userInfoController.uploadProfilePicture);

// Endpoint untuk mengambil data diri pengguna
router.get('/getAllProfiles', userInfoController.getAllProfiles);

module.exports = router;
