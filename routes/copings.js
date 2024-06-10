// routes/copings.js

const express = require('express');
const router = express.Router();
const copingsController = require('../controllers/copingsController');
const authMiddleware = require('../middleware/authMiddleware');

// Middleware for authentication
router.use(authMiddleware);

// Route to get coping recommendations based on the latest mood in mood_logs
router.get('/coping-recommendations/:journal_id', copingsController.getCopingRecommendations);

module.exports = router;
