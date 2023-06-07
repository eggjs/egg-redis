import { Redis, RedisOptions } from "ioredis";

interface ClusterOptions extends RedisOptions {
  cluster?: boolean;
  nodes?: RedisOptions[];
}

interface EggRedisOptions {
  Redis?: Redis;
  default?: object;
  app?: boolean;
  agent?: boolean;
  client?: ClusterOptions;
  clients?: Record<string, RedisOptions | ClusterOptions>;
}

declare module 'egg' {
  interface Application {
    redis: Redis & Singleton<Redis>;
  }

  interface EggAppConfig {
    redis: EggRedisOptions;
  }
}
