import { Redis, RedisOptions } from "ioredis";

interface RedisOpts extends RedisOptions {
    password?: string | undefined | null;
}

interface ClusterOptions extends RedisOpts {
    cluster?: boolean;
    nodes?: RedisOpts[];
}

interface EggRedisOptions {
    default?: object;
    app?: boolean;
    agent?: boolean;
    client?: ClusterOptions;
    clients?: Record<string, RedisOpts>;
}

declare module 'egg' {
    interface Application {
        redis: Redis;
    }

    interface EggAppConfig {
        redis: EggRedisOptions;
    }
}
