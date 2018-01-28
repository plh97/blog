// const Auth = require('./auth.js');
const Graphql = require('./graphql.js');
// const Test = require('./test.js');
// const Upload = require('./upload.js');
const router = require('koa-router')();
const koaBody = require('koa-body')


// const graphqlHTTP = require('koa-graphql');
// const {apolloServer} = require ('graphql-tools');
// const {schema} = require ('../models/GraphQL.model');

// exports.getCode = apolloServer({
// 	schema:schema,
// 	// rootValue: root,
// 	graphiql: true,
// 	pretty:true
// })


router
      .all('/graphql', Graphql.getCode)
      // .get('/test', Test.getCode)
      // .post('/upload', koaBody({multipart: true}), Upload.getCode)
module.exports = router;
