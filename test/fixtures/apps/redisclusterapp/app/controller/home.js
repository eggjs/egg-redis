'use strict';

module.exports = app => {
  return class HomeController extends app.Controller {
    * index() {
      const { ctx, app } = this;
      yield app.redis.set('foo', 'bar');
      ctx.body = yield app.redis.get('foo');
    }
  };
};
