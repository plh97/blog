const http = require('http')
const App = require('koa');
const xtpl = require('koa-xtpl');
const path = require('path');
const app = new App();
const server = http.createServer(app.callback());
const static = require('koa-static');
const compress = require('koa-compress')
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
  .use(static(path.join(__dirname, staticPath), {
    maxAge: 356 * 24 * 60 * 60
  }))
  .use(xtpl({
    root: path.resolve(__dirname, './dist'),
    extname: 'html',
    commands: {}
  }))
  // app.use(compress({
  //   filter: function (content_type) {
  //   	return /text/i.test(content_type)
  //   },
  //   threshold: 2048,
  //   flush: require('zlib').Z_SYNC_FLUSH
  // }))

app.use(async(ctx, next) => {
  await ctx.render('index', {});
});

server.listen(port);
const config = require('./webpack.config')
// app.use(webpackMiddleware(webpack(config), {
//   stats: {colors: true}
// }));
