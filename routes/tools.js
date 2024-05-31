const express = require('express');
const { getJournals, addJournal } = require('../controllers/toolsController');

const router = express.Router();

router.post('/journal/:id', addJournal);
router.get('/journal/:id', getJournals);

module.exports = router;