'use strict';

exports.redis = {
  client: {
    host: '127.0.0.1',
    port: 6379,
    password: '',
    db: '0',
  },
  agent:true,
  Redis: require('ioredis'),
};

exports.logger = {
  coreLogger: {
    level: 'INFO',
  },
};

exports.keys = 'keys';
