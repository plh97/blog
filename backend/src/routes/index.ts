import * as Router from 'koa-router';
import Graphql from './graphql';

const router = new Router()

router
  .all('/graphql', Graphql)


module.exports = router;

