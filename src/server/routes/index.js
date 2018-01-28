const Auth = require('./auth.js');
const Graphql = require('./graphql.js');
const koaBody = require('koa-body');
// const Test = require('./test.js');
// const Upload = require('./upload.js');
const router = require('koa-router')();

router
      .get('/auth', Auth.getCode)
      .all('/graphql', koaBody({multipart: true}), Graphql.getCode)
      // .get('/test', Test.getCode)
      // .post('/upload', koaBody({multipart: true}), Upload.getCode)
module.exports = router;
