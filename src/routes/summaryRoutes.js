const express = require('express');
const { summarizeNotes } = require('../controllers/summaryController');

const router = express.Router();

// POST /api/summarize
router.post('/summarize', summarizeNotes);

module.exports = router;
