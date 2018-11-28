'use strict';

const mm = require('egg-mock');
const request = require('supertest');

describe('test/redis.test.js', () => {
  describe('single client', () => {
    let app;
    before(async () => {
      app = mm.app({
        baseDir: 'apps/redisapp',
      });
      await app.ready();
    });
    after(() => app.close());
    afterEach(mm.restore);

    it('should query', () => {
      return request(app.callback())
        .get('/')
        .expect(200)
        .expect('bar');
    });
  });

  describe('single client supportTimeCommand = false', () => {
    let app;
    before(async () => {
      app = mm.app({
        baseDir: 'apps/redisapp-supportTimeCommand-false',
      });
      await app.ready();
    });
    after(() => app.close());
    afterEach(mm.restore);

    it('should query', () => {
      return request(app.callback())
        .get('/')
        .expect(200)
        .expect('bar');
    });
  });
});
