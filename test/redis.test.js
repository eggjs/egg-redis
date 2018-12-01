'use strict';

const mm = require('egg-mock');
const request = require('supertest');
const path = require('path');
const compile = require('child_process');

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

  describe('single client with customize ioredis', () => {
    let app;
    before(async () => {
      app = mm.app({
        baseDir: 'apps/redisapp-customize',
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


  describe('single client for ts', () => {
    let app;
    before(async () => {
      // Add new dynamic compiler to compile from ts to js
      const destPath = path.resolve('./test/fixtures/apps/ts');
      const compilerPath = path.resolve('./node_modules/typescript/bin/tsc');
      compile.execSync(`node ${compilerPath} -p ${destPath}`);
      app = mm.app({
        baseDir: 'apps/ts/redisapp-ts',
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
