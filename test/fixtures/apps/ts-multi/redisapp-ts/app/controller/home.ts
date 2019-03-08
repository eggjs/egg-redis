import {Controller, Singleton} from 'egg';
import { Redis } from 'ioredis';

declare module 'egg' {
    interface IController {
      home: HomeController;
    }
  }
  
  export default class HomeController extends Controller {
    async index() {
        const { ctx,app } = this;
        const redis = (app.redis as Singleton<Redis>).get('cache');
        await redis.set('foo', 'bar');
        ctx.body = await redis.get('foo'); 
    }
}
