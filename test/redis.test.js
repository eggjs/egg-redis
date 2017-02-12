'use strict';

const assert = require('assert');
const request = require('supertest');
const mm = require('egg-mock');
const utility = require('utility');
const path = require('path');
const fs = require('fs');

describe('test/redis.test.js', () => {
  let app;
  const uid = utility.randomString();

  before(() => {
    app = mm.app({
      baseDir: 'apps/redisapp',
    });
    return app.ready();
  });

  beforeEach(function* () {

  });

  afterEach(function* () {

  });

  after(done => {
    app.redis.end(err => {
      app.close();
      done(err);
    });
  });

  afterEach(mm.restore);

  it('should query', () => {
    return request(app.callback())
      .get('/')
      .expect(200);
  });

});
