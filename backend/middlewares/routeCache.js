const NodeCache = require('node-cache');
const cache = new NodeCache();

module.exports = duration => (req, res, next) => {
  if(req.method !== 'GET') {
    // Clear cache on POST, PUT, DELETE of the same route
    if(cache.has(req.originalUrl)){
      console.log('Cache cleared');
      cache.del(req.originalUrl);
    }
    return next();
  }
  const key = req.originalUrl;
  const cachedBody = cache.get(key);
  if(cachedBody) {
    // Send json response
    console.log('Cache hit');
    res.json(JSON.parse(cachedBody));
  }else{
    // Send response
    console.log('Cache miss');
    res.sendResponse = res.send;
    res.send = body => {
      cache.set(key, body, duration);
      res.sendResponse(body);
    };
    next();
  }
};