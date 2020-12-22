import * as Koa from "koa";
// import * as Router from "koa-router";

import * as bodyParser from "koa-bodyparser";
// local
const allRouter = require("./routes/index.ts");
const app = new Koa();
// const router = new Router();

const PORT = process.env.PORT;

app
  .use(bodyParser())
  // 跨域中间件
  .use(async (ctx, next) => {
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Accept, X-Requested-With, remember-me"
    );
    await next();
  })
  // 响应时间中间件
  .use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
  })
  .use(allRouter.routes())
  .use(allRouter.allowedMethods());

app.listen(PORT, () => {
  console.log(`success listen port ${PORT}`);
});
