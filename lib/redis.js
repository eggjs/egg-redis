'use strict';

const assert = require('assert');
const awaitFirst = require('await-first');

module.exports = app => {
  app.addSingleton('redis', createClient);
};

let count = 0;
function createClient(config, app) {
  const Redis = app.config.redis.Redis || require('ioredis');
  let client;

  if (config.cluster === true) {
    assert(config.nodes && config.nodes.length !== 0, '[egg-redis] cluster nodes configuration is required when use cluster redis');

    config.nodes.forEach(client => {
      assert(client.host && client.port, `[egg-redis] 'host: ${client.host}', 'port: ${client.port}' are required on config`);
    });
    app.coreLogger.info('[egg-redis] cluster connecting');
    client = new Redis.Cluster(config.nodes, config);
  } else if (config.sentinels) {
    assert(config.sentinels && config.sentinels.length !== 0, '[egg-redis] sentinels configuration is required when use redis sentinel');

    config.sentinels.forEach(sentinel => {
      assert(sentinel.host && sentinel.port,
        `[egg-redis] 'host: ${sentinel.host}', 'port: ${sentinel.port}' are required on config`);
    });

    assert(config.name && config.password !== undefined && config.db !== undefined,
      `[egg-redis] 'name of master: ${config.name}', 'password: ${config.password}', 'db: ${config.db}' are required on config`);

    app.coreLogger.info('[egg-redis] sentinel connecting start');
    client = new Redis(config);
  } else {
    assert((config.host && config.port && config.password !== undefined && config.db !== undefined) || config.path,
      `[egg-redis] 'host: ${config.host}', 'port: ${config.port}', 'password: ${config.password}', 'db: ${config.db}' or 'path:${config.path}' are required on config`);
    if (config.host) {
      app.coreLogger.info('[egg-redis] server connecting redis://:***@%s:%s/%s',
        config.host, config.port, config.db);
    } else {
      app.coreLogger.info('[egg-redis] server connecting %s',
        config.path || config);
    }

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
    if (config.weakDependent) {
      app.coreLogger.info(`[egg-redis] instance[${index}] is weak dependent and won't block app start`);
      client.once('ready', () => {
        app.coreLogger.info(`[egg-redis] instance[${index}] status OK`);
      });
      return;
    }

    await awaitFirst(client, [ 'ready', 'error' ]);
    app.coreLogger.info(`[egg-redis] instance[${index}] status OK, client ready`);
  });

  return client;
}
