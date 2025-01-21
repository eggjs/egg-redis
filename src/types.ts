import type { Singleton } from '@eggjs/core';
import type { Redis } from 'ioredis';
import type { RedisConfig } from './config/config.default.js';

declare module '@eggjs/core' {
  // add EggAppConfig overrides types
  interface EggAppConfig {
    redis: RedisConfig;
  }

  interface EggCore {
    redis: Redis & Singleton<Redis>;
  }
}
