'use strict';

const redis = require('./lib/redis');

module.exports = agent => {
  if (agent.config.redis.agent) redis(agent);
};
