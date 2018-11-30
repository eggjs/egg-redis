import {Redis} from 'ioredis';

declare module 'egg' {
    export interface Application {
        redis: Redis
    }
}