import {Controller} from 'egg';

declare module 'egg' {
    interface IController {
      home: HomeController;
    }
  }
  
  export default class HomeController extends Controller {
    async index() {
        const { ctx,app } = this;
        await app.redis.set('foo', 'bar');
        ctx.body = await app.redis.get('foo'); 
    }
}
