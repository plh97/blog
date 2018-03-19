const Graphql = require('./graphql.js');
const koaBody = require('koa-body');
const router = require('koa-router')();

router.all('/graphql', koaBody({ multipart: true }), Graphql);
module.exports = router;
