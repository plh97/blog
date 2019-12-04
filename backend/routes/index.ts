
const router = require('koa-router')();
const koaBody = require('koa-body');

const Upload = require('./upload');
const Graphql = require('./graphql.js');
const pcss = require('./postcss.js');
// const rebuild = require('./rebuild.js');

router
  .all('/upload', koaBody({ multipart: true }), Upload)
  .all('/graphql', Graphql)
  .all('/postcss', pcss)
  .all('/test', async ctx=>{
    ctx.body = new Date()
  })


module.exports = router;

