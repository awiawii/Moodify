const express = require('express');
const { getJournals, addJournal, updateJournal } = require('../controllers/toolsController');

const router = express.Router();

router.post('/journal/:id', addJournal);
router.get('/journal/:id', getJournals);
router.patch('/journal/:id', updateJournal);

module.exports = router;