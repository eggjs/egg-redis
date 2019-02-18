import {Controller} from 'egg';

declare module 'egg' {
    interface IController {
      home: HomeController;
    }
  }
  
  export default class HomeController extends Controller {
    async index() {
        const { ctx,app } = this;
        const redis = app.redis
        await redis.set('foo', 'bar');
        ctx.body = await redis.get('foo'); 
    }
}
