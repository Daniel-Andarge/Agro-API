const rateLimit = require('express-rate-limit');

const reqRateLimiter = rateLimit({
  windowMs: 60000, // 1 min
  max: 5,
  message: 'Request error, you have reached maximum allowed requests. Please try again after 1 minute', 
  statusCode: 429,
  headers: true,
});
module.exports = { reqRateLimiter }