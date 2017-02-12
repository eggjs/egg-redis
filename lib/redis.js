'use strict';

const assert = require('assert');
const Redis = require('ioredis');

module.exports = app => {
  app.addSingleton('ioredis', createOneClient);
};

function createOneClient(config, app) {
  assert(config.host && config.port && config.password && config.db,
    `[egg-redis] 'host: ${config.host}', 'port: ${config.port}', 'password: ${config.password}', 'db: ${config.db}' are required on config`);

  app.coreLogger.info('[egg-redis] connecting redis://:%s@%s:%s/%s',
    config.password, config.host, config.port, config.db);
  const client = new Redis(config);

  client.on('connect', function () {

  });

  client.on('error', function () {

  });

  client.on('reconnect', function () {

  });

  return client;
}

function createClusterClient(config, app) {

  config.forEach((client) => {
      assert(client.host && client.port && client.password && client.db,
        `[egg-redis] 'host: ${client.host}', 'port: ${client.port}', 'password: ${client.password}', 'db: ${client.db}' are required on config`);
    })
    /*
    app.coreLogger.info('[egg-redis] connecting %s@%s:%s/%s',
      config.user, config.host, config.port, config.database);
    */

  const cluster = new Redis.Cluster(config);

  cluster.on('connect', function () {

  });

  cluster.on('error', function () {

  });

  cluster.on('reconnect', function () {

  });

  return cluster;
}
