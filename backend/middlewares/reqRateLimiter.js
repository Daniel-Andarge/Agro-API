const rateLimit = require('express-rate-limit');

const reqRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min in milliseconds
  max: 5,
  message: 'Request error, you have reached maximum allowed requests. Please try again after 30 minutes', 
  statusCode: 429,
  headers: true,
});
module.exports = { reqRateLimiter }