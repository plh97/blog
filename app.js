const http = require('http')
const App = require('koa');
const xtpl = require('koa-xtpl');
const path = require('path');
const rewrite = require('rewrite');
const app = new App();
const server = http.createServer(app.callback());
const static = require('koa-static');
const staticCache = require('koa-static-cache')
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const webpack = require('webpack');
const webpackMiddleware = require('koa-webpack-dev-middleware');
const staticPath = './dist';
const port = process.env.PORT || 8001;

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(staticCache(path.join(__dirname, staticPath), {maxAge: 31536000}))
  .use(xtpl({
    root: path.resolve(__dirname, './dist'),
    extname: 'html',
    commands: {}
  }))

app.use(async(ctx, next) => {
  await ctx.render('index', {});
});

server.listen(port);
const config = require('./webpack.config')
// app.use(webpackMiddleware(webpack(config), {
//   stats: {colors: true}
// }));
console.log("process.env.PORT :", process.env.PORT)
