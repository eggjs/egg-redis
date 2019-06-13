
2.4.0 / 2019-06-13
==================

**features**
  * [[`5fbd718`](http://github.com/eggjs/egg-redis/commit/5fbd718c60e4c82a94f34a96583ed877d8e4fa5f)] - feat: add config.client.weakDependent (#30) (Yiyu He <<dead_horse@qq.com>>)

**others**
  * [[`b307f52`](http://github.com/eggjs/egg-redis/commit/b307f52ff8d9b67769b57498bb39fa835916d472)] - chore: test on node@12 (dead-horse <<dead_horse@qq.com>>)

2.3.2 / 2019-04-24
==================

**fixes**
  * [[`ce7e40e`](http://github.com/eggjs/egg-redis/commit/ce7e40eaae3f635654aaa101493e6cf4a921c6cc)] - fix: should listen redis ready event before app start (#29) (killa <<killa123@126.com>>)

2.3.1 / 2019-04-10
==================

**fixes**
  * [[`3b0fa5a`](http://github.com/eggjs/egg-redis/commit/3b0fa5a536517f722e94a304a7eb9e0e530a6328)] - fix(types): add multi client support for typescript (#27) (mars <<marshalys@gmail.com>>)

2.3.0 / 2018-12-18
==================

  * feat: redis sentinel config support (#26)
  * deps: add @types/ioredis to deps (#25)

2.2.0 / 2018-12-04
==================

**features**
  * [[`f062dd5`](http://github.com/eggjs/egg-redis/commit/f062dd571ce17f569a65066a95f600e64b3d15c2)] - feat: support typescript (#23) (耐小心 <<qiqizjl@qq.com>>)

2.1.0 / 2018-11-28
==================

**features**
  * [[`ee3fda1`](http://github.com/eggjs/egg-redis/commit/ee3fda1f95a178a6120fe32141c903d19f7f5ecb)] - feat: support customize ioredis version (#21) (Yiyu He <<dead_horse@qq.com>>)

2.0.1 / 2018-11-28
==================

**fixes**
  * [[`fbfbbfa`](http://github.com/eggjs/egg-redis/commit/fbfbbfabe4650a529f2d2d46983e1b05df1fb347)] - fix: show real redis server time by TIME command (#20) (fengmk2 <<fengmk2@gmail.com>>)

2.0.0 / 2018-02-27
==================

**others**
  * [[`70e85e2`](http://github.com/eggjs/egg-redis/commit/70e85e2710c729245281b78007be4d84fba10dbe)] - chore: add package.files (dead-horse <<dead_horse@qq.com>>)
  * [[`45585e8`](http://github.com/eggjs/egg-redis/commit/45585e81ff30bd2e98241c924605272b516f9b9a)] - chore: update dependencies and fix ci (#16) (Yiyu He <<dead_horse@qq.com>>)
  * [[`8b88641`](http://github.com/eggjs/egg-redis/commit/8b886413ff60539b4e53fce50cfc8be0790d0612)] - refactor: use async function (#15) (QIAO <<445271466@qq.com>>)
  * [[`8dd3776`](http://github.com/eggjs/egg-redis/commit/8dd3776c346e22c7e9afc14a141c026f7d6dd7ae)] - deps: Update ioredis (#14) (thegatheringstorm <<tgs@tgs.blue>>)
  * [[`59d9579`](http://github.com/eggjs/egg-redis/commit/59d9579f37d5b54d62674d1ab3ba1274537b5590)] - docs: fix some typo (#13) (kyle <<succpeking@hotmail.com>>)
  * [[`de17719`](http://github.com/eggjs/egg-redis/commit/de17719f93bf566f5499d8ceb3f4588de3f2d7d3)] - docs:add nopassword doc (#12) (Adams <<jtyjty99999@126.com>>)
  * [[`5b0dd99`](http://github.com/eggjs/egg-redis/commit/5b0dd9963d1e78e34ebe6fb6ac7aaa663ee23115)] - chore:bump to 1.0.2 (jtyjty99999 <<jtyjty99999@126.com>>),

1.0.2 / 2017-07-13
==================

  * fix : fix check method (#10)
  * docs: add configuration details (#9)
  * test: upgrade all deps (#7)
  * docs:fix redis cluster doc (#6)

1.0.1 / 2017-02-21
==================

  * fix:fix zero judgement (#5)

1.0.0 / 2017-02-17
==================

  * feat: implement with ioredis
