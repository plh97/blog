//package
const Koa = require('koa');
const http = require('http');
const path = require('path');
const json = require('koa-json');
const koaSend = require('koa-send');
const logger = require('koa-logger');
const static = require('koa-static');
const bodyparser = require('koa-bodyparser');

//local
const config = require('../../config/server');
const allRouter = require('./routes/index.js');

//application
const app = new Koa();
const server = http.createServer(app.callback());
const port = process.env.PORT || config.port;


app
    .use(bodyparser())
    .use(json())
    .use(logger())
    .use(static(path.resolve('./dist'), {
        // maxAge: 1000 * 60 * 60 * 24 * 7,
        gzip: true,
    }))
    .use(allRouter.routes())
    .use(allRouter.allowedMethods())
    // 将前端路由指向 index.html
    .use(async (ctx, next) => {
        if (!/\./.test(ctx.request.url)) {
            await koaSend(
                ctx,
                'index.html',
                {
                    root: path.resolve('./dist'),
                    // maxage: 1000 * 60 * 60 * 24 * 7,
                    gzip: true,
                } // eslint-disable-line
            );
        } else {
            await next();
        }
    });

server.listen(port,()=>{
  console.log(` >>> port: ${port }`);
  console.log(` >>> ENV: ${process.env.NODE_ENV}`);
});