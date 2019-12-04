import * as Koa from 'koa';
import * as Router from 'koa-router';

const app = new Koa()
const router = new Router();

const PORT = process.env.PORT

router.get('/*', async (ctx) => {
  ctx.body = 'Hello World!';
});

app.use(router.routes());

app.listen(PORT, ()=>{
  console.log(`success listen port ${PORT}`);
})
