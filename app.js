const http = require('http')
const App = require('koa');
const app = new App()
const server = http.createServer(app.callback());
const static = require('koa-static');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const webpack = require('webpack');
const webpackMiddleware = require('koa-webpack-dev-middleware');
const staticPath = './dist';
console.log("process.env.NODE_ENV :",process.env.NODE_ENV )

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(require('koa-static')(staticPath))

server.listen(8001);
const config = require('./webpack.config')
// app.use(webpackMiddleware(webpack(config), {
//   stats: {colors: true}
// }));
