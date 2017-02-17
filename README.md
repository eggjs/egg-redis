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

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
