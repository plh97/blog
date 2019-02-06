// store 存储对象,
// 由于 redux-react 提供统一根节点入口
// 并且加载中间件
// 通过 new createStore创建的新节点  暴露 出一个store, 自带 dispatch 方法

import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'
import todoApp from '../reducers';

const logger = createLogger();

export default createStore(
  todoApp,
  applyMiddleware(
    promise(),
    thunk,
    logger
  )
);
