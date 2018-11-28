'use strict';

const assert = require('assert');
const Redis = require('ioredis');

module.exports = app => {
  app.addSingleton('redis', createClient);
};

let count = 0;
function createClient(config, app) {
  let client;

  if (config.cluster === true) {
    assert(config.nodes && config.nodes.length !== 0, '[egg-redis] cluster nodes configuration is required when use cluster redis');

    config.nodes.forEach(client => {
      assert(client.host && client.port && client.password !== undefined && client.db !== undefined,
        `[egg-redis] 'host: ${client.host}', 'port: ${client.port}', 'password: ${client.password}', 'db: ${client.db}' are required on config`);
    });
    app.coreLogger.info('[egg-redis] cluster connecting');
    client = new Redis.Cluster(config.nodes, config);
  } else {
    assert(config.host && config.port && config.password !== undefined && config.db !== undefined,
      `[egg-redis] 'host: ${config.host}', 'port: ${config.port}', 'password: ${config.password}', 'db: ${config.db}' are required on config`);
    app.coreLogger.info('[egg-redis] server connecting redis://:***@%s:%s/%s',
      config.host, config.port, config.db);
    client = new Redis(config);
  }

  client.on('connect', () => {
    app.coreLogger.info('[egg-redis] client connect success');
  });
  client.on('error', err => {
    app.coreLogger.error('[egg-redis] client error: %s', err);
    app.coreLogger.error(err);
  });

  app.beforeStart(async () => {
    const index = count++;
    if (app.config.redis.supportTimeCommand) {
      const serverTimes = await client.time();
      // [ '1543378095', '393297' ]
      const dateTime = new Date(Number(String(serverTimes[0]) + String(serverTimes[1]).substring(0, 3)));
      app.coreLogger.info(`[egg-redis] instance[${index}] status OK, redis server currentTime: ${dateTime}`);
    } else {
      await client.get('egg-redis-hello');
      app.coreLogger.info(`[egg-redis] instance[${index}] status OK, client ready`);
    }
  });

  return client;
}
