'use strict';
const Controller = require('egg').Controller;
module.exports = app => {
  return class HomeController extends Controller {
    async index() {
      const { ctx, app } = this;
      await app.redis.set('foo', 'bar');
      ctx.body = await app.redis.get('foo');
    }
  };
};
