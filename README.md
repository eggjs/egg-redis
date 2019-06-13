# egg-redis

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-redis.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-redis
[travis-image]: https://img.shields.io/travis/eggjs/egg-redis.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-redis
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-redis.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-redis?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-redis.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-redis
[snyk-image]: https://snyk.io/test/npm/egg-redis/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-redis
[download-image]: https://img.shields.io/npm/dm/egg-redis.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-redis

Redis client(support redis portocal) based on ioredis for egg framework

## Install

```bash
$ npm i egg-redis --save
```

redis Plugin for egg, support egg application access to redis.

This plugin based on [ioredis](https://github.com/luin/ioredis), if you want to know specific usage, you should refer to the document of [ioredis](https://github.com/luin/ioredis).

## Configuration

Change `${app_root}/config/plugin.js` to enable redis plugin:

```js
exports.redis = {
  enable: true,
  package: 'egg-redis',
};
```

Configure redis information in `${app_root}/config/config.default.js`:

**Single Client**

```javascript
config.redis = {
  client: {
    port: 6379,          // Redis port
    host: '127.0.0.1',   // Redis host
    password: 'auth',
    db: 0,
  },
}
```

**Multi Clients**

```javascript
config.redis = {
  clients: {
    foo: {                 // instanceName. See below
      port: 6379,          // Redis port
      host: '127.0.0.1',   // Redis host
      password: 'auth',
      db: 0,
    },
    bar: {
      port: 6379,
      host: '127.0.0.1',
      password: 'auth',
      db: 1,
    },
  }
}
```

**Sentinel**

```javascript
config.redis = {
  client: {
    sentinels: [{          // Sentinel instances
      port: 26379,         // Sentinel port
      host: '127.0.0.1',   // Sentinel host
    }],
    name: 'mymaster',      // Master name
    password: 'auth',
    db: 0
  },
}
```

**No password**

Redis support no authentication access, but we are highly recommand you to use redis `requirepass` in `redis.conf`.

```bash

$vim /etc/redis/redis.conf

requirepass xxxxxxxxxx  // xxxxxxxxxx is your password

```

Because it may be cause security risk, refer:

- https://ruby-china.org/topics/28094
- https://zhuoroger.github.io/2016/07/29/redis-sec/

If you want to access redis with no password, use `password: null`.

See [ioredis API Documentation](https://github.com/luin/ioredis/blob/master/API.md#new_Redis) for all available options.

### Customize `ioredis` version

`egg-redis` using ioredis@3 now, if you want to upgrade your ioredis, you can pass the instance by `config.redis.Redis`:

```js
// config/config.default.js
config.redis = {
  Redis: require('ioredis'), // customize ioredis version, only set when you needed
  client: {
    port: 6379,          // Redis port
    host: '127.0.0.1',   // Redis host
    password: 'auth',
    db: 0,
  },
}
```

**weakDependent**

```javascript
config.redis = {
  client: {
    port: 6379,          // Redis port
    host: '127.0.0.1',   // Redis host
    password: 'auth',
    db: 0,
    weakDependent: true, // this redis instance won't block app start
  },
}
```

## Usage

In controller, you can use `app.redis` to get the redis instance, check [ioredis](https://github.com/luin/ioredis#basic-usage) to see how to use.

```js
// app/controller/home.js

module.exports = app => {
  return class HomeController extends app.Controller {
    async index() {
      const { ctx, app } = this;
      // set
      await app.redis.set('foo', 'bar');
      // get
      ctx.body = await app.redis.get('foo');
    }
  };
};
```

### Multi Clients

If your Configure with multi clients, you can use `app.redis.get(instanceName)` to get the specific redis instance and use it like above.

```js
// app/controller/home.js

module.exports = app => {
  return class HomeController extends app.Controller {
    async index() {
      const { ctx, app } = this;
      // set
      await app.redis.get('instance1').set('foo', 'bar');
      // get
      ctx.body = await app.redis.get('instance1').get('foo');
    }
  };
};
```


### Clients Depend on Redis Cluster

Before you start to use Redis Cluster, please checkout the [document](https://redis.io/topics/cluster-tutorial) first, especially confirm `cluster-enabled yes` in Redis Cluster configuration file.

In controller, you also can use `app.redis` to get the redis instance based on Redis Cluster.

```js

// app/config/config.default.js

exports.redis = {
   client: {
     cluster: true,
     nodes: [{
       host: '127.0.0.1',
       port: '6379',
       family: 'user',
       password: 'password',
       db: 'db',
     }, {
       host: '127.0.0.1',
       port: '6380',
       family: 'user',
       password: 'password',
       db: 'db',
     }]
   },
};

// app/controller/home.js

module.exports = app => {
  return class HomeController extends app.Controller {
    async index() {
      const { ctx, app } = this;
      // set
      await app.redis.set('foo', 'bar');
      // get
      ctx.body = await app.redis.get('foo');
    }
  };
};
```


## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
