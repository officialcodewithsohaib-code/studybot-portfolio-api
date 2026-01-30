const express = require('express');
const { chatWithPortfolio } = require('../controllers/portfolioController');
const rateLimiter = require('../middleware/rateLimiter');

const router = express.Router();

/**
 * POST /api/portfolio/chat
 * Chat with portfolio AI assistant
 */
router.post('/portfolio/chat', rateLimiter, chatWithPortfolio);

module.exports = router;
