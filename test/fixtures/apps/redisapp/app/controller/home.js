'use strict';

module.exports = function* () {
  const a = yield this.redis.get(a);

  this.body = {
    status: 'success',
    a,
  };
};
