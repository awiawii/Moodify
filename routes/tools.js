const express = require('express');
const { getJournals, addJournal, updateJournal, getTodayJournal, getTodayMood, getWeeklyMoods } = require('../controllers/toolsController');

const router = express.Router();

router.post('/journal/:id', addJournal);
router.get('/journal/:id', getJournals);
router.patch('/journal/:id', updateJournal);
router.get('/journal/today/:id', getTodayJournal);
router.get('/mood/today/:id', getTodayMood);
router.get('/mood/week/:id', getWeeklyMoods);

module.exports = router;