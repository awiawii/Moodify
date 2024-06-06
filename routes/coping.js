// routes/copings.js

const express = require('express');
const router = express.Router();
const copingsController = require('../controllers/copingsController');
const authMiddleware = require('../middleware/authMiddleware')

router.use(authMiddleware);

// Route untuk mendapatkan rekomendasi coping berdasarkan jurnal_id
router.get('/coping/:journal_id/recommendations', copingsController.getCopingRecommendations);
router.post('/coping/addEntry', copingsController.addMoodLogEntry);

module.exports = router;
