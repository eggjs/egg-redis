import { Redis, RedisOptions, ClusterOptions } from "ioredis";

declare module 'egg' {
  interface Application {
    redis: Redis;
  }

  interface EggAppConfig {
    redis: RedisOptions | ClusterOptions;
  }
}
