const express = require('express');
const { getJournals, addJournal, updateJournal, getTodayJournal, getTodayMood, getWeeklyMoods } = require('../controllers/toolsController');

const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware')

router.post('/journal', authMiddleware, addJournal);
router.get('/journal', authMiddleware, getJournals);
router.patch('/journal', authMiddleware, updateJournal);
router.get('/journal/today', authMiddleware, getTodayJournal);
router.get('/mood/today', authMiddleware, getTodayMood);
router.get('/mood/week', authMiddleware, getWeeklyMoods);

module.exports = router;