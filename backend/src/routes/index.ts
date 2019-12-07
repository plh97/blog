import * as Router from "koa-router";
import Graphql from "./graphql";

const router = new Router();

router.all("/graphql", Graphql).all("/test", ctx => {
  ctx.body = new Date();
});

module.exports = router;
