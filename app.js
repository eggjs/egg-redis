'use strict';

const redis = require('./lib/redis');

module.exports = app => {
  if (app.config.redis.app) redis(app);
};
