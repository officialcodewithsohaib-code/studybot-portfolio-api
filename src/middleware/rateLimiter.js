const rateLimit = require('express-rate-limit');

/**
 * Rate limiter to prevent API abuse
 * Limits: 10 requests per minute per IP
 */
const rateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // 10 requests per window
  message: {
    status: 'error',
    message: 'Too many requests. Please try again in a minute.'
  },
  standardHeaders: true,
  legacyHeaders: false
});

module.exports = rateLimiter;
