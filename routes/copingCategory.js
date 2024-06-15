const express = require('express');
const router = express.Router();
const copingCategoryController = require('../controllers/copingCategoryController');
const authMiddleware = require('../middleware/authMiddleware');

// Middleware for authentication
router.use(authMiddleware);

// Route to get mood coping data
router.get('/type/music/', copingCategoryController.getMoodCopingDataMusic);
router.get('/type/podcast/', copingCategoryController.getMoodCopingDataPodcast);
router.get('/type/meditation/', copingCategoryController.getMoodCopingDataMeditation);

module.exports = router;
