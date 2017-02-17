'use strict';

const mm = require('egg-mock');
const request = require('supertest');

describe('test/redis.test.js', () => {

  describe('single client', () => {
    let app;
    before(function* () {
      app = mm.app({
        baseDir: 'apps/redisapp',
      });
      yield app.ready();
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
