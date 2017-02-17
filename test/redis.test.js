'use strict';

const assert = require('assert');
const mm = require('egg-mock');
describe('test/redis.test.js', () => {

  describe('single client', () => {
    let app;
    before(function* () {
      app = mm.app({
        baseDir: 'apps/redisapp',
      });
      yield app.ready();
    });
    after(() => {
      app.close();
    });
    afterEach(mm.restore);
    it('should query', done => {
      app.redis.set('foo', 'bar');
      app.redis.get('foo', function(err, result) {
        assert(result === 'bar');
        done();
      });
    });

  });

  describe.skip('cluster client', () => {
    let app;
    before(function* () {
      app = mm.app({
        baseDir: 'apps/redisclusterapp',
      });
      yield app.ready();
    });
    after(() => {
      app.close();
    });
    afterEach(mm.restore);
    it('should support cluster config', done => {
      app.redis.set('foo', 'bar');
      app.redis.get('foo', function(err, result) {
        assert(result === 'bar');
        done();
      });
    });
  });

});
