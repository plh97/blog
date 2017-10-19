const http = require('http')
const App = require('koa');
const app = new App()
// SSL options
// const fs = require('fs');
// const options = {
//     key: fs.readFileSync('./peng.pipk.top.key'),  //ssl文件路径
//     cert: fs.readFileSync('./peng.pipk.top.crt')  //ssl文件路径
// };

// start the server
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



// router.get('/reactapi/:id',async ctx => {
//   ctx.redirect('/')
// })

// servers.listen(443);
server.listen(8001);
const config = require('./webpack.config')
// app.use(webpackMiddleware(webpack(config), {
//   stats: {colors: true}
// }));
