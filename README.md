[![Build Status](https://travis-ci.org/pengliheng/pengliheng.github.io.svg?branch=master)](https://travis-ci.org/pengliheng/pengliheng.github.io)
[![author](https://img.shields.io/badge/author-peng-blue.svg)](https://github.com/pengliheng/pengliheng.github.io)
[![Node.js Version](https://img.shields.io/badge/node.js-8.7.0-blue.svg)](http://nodejs.org/download)
![Size](https://github-size-badge.herokuapp.com/pengliheng/pengliheng.github.io.svg)

### 欢迎光临我的博客

###### [本站](https://pipk.top)托管于 Github，所有数据来源于[ISSUE](https://github.com/pengliheng/pengliheng.github.io/issues)，通过 GitHub API 动态加载数据渲染页面。

### 我的技术栈

-   JavaScript(React Vue)
-   Nodejs(koa)
-   HTTP(http1.1 https http2)
-   Python
-   Nginx
-   Graphql
-   RegExp

### TODO

-   [ ] 引入 jest 单元测试,覆盖率>90%
    -   reducer 测试
    -   component 测试
    -   container 测试
    -   saga 测试
-   [ ] 引入 `redux-saga` 处理异步流程
-   [ ] 给组件加入 loading 状态
-   [ ] 高阶组件的加入, title 装饰器加入,
-   [ ] static prototype / static defaultProtype -> 引入 以组件为单位,严格限制传入的 prop 以及设置默认 prop
-   [ ] 将所有组件转化成 `useState` 函数式组件
-   [ ] 引入 typescript, 将 js 彻底静态化

### TODO
...继续做...利用 http 拦截器,也就是中间件,来做`loading`状态,4 种 test 测试加上,`redux-thunk`过渡到`redux-saga`,了解为什么要将异步请求放在 saga 里面,暴露问题,不暴露也可以,前提是能创造价值没问题,如果不行,又不暴露问题,那就...也可以自己偷偷解决一下问题?当然有些问题是可以解决的,面对一下.当然有些问题呢,永远也无法解决,我也不想再面对.ok,最后想一下,这是个可达到的目标,

-   [ ] 搭建 react+redux+redux-thunk 基础环境
-   [ ] http 请求搞起来
-   [ ] 4 种测试用例.
-   [ ] 拦截 http 请求,做 loading

### redux-thunk

使用`redux-thunk`原因在于下面报错内容,允许 action 返回一个函数.

```bash
Uncaught Error: Actions must be plain objects. Use custom middleware for async actions.
```

### Pay Atention

垒砖的同时,最大限度的做好单测,地基牢固了,做了单测了,才能放心的进行下一步流程的开发.

### 看过的书

-   [x] [网络是怎样连接的](https://book.douban.com/subject/26941639/) - [笔记](https://github.com/pengliheng/pengliheng.github.io/issues/40)

![](https://static.pipk.top/api/public/images/6075462533216409.png)

---

-   [x] [HTTP 权威指南](https://book.douban.com/subject/10746113/) - [笔记一](https://github.com/pengliheng/pengliheng.github.io/issues/45) - [笔记二](https://github.com/pengliheng/pengliheng.github.io/issues/52)

![](https://static.pipk.top/api/public/images/2376380500856452.png)

---

-   [x] [JavaScript 面向对象精要](https://book.douban.com/subject/26352658/) - [笔记一](https://github.com/pengliheng/pengliheng.github.io/issues/29) - [笔记二](https://github.com/pengliheng/pengliheng.github.io/issues/31)

![](https://static.pipk.top/api/public/images/7833702919612766.png)

---

-   [x] [现代前端技术解析](https://book.douban.com/subject/27021790/) - [笔记一](https://github.com/pengliheng/pengliheng.github.io/issues/28) - [笔记二](https://github.com/pengliheng/pengliheng.github.io/issues/58)

---

-   [x] [深入理解 ES6](https://book.douban.com/subject/27072230/) - [笔记一](https://github.com/pengliheng/pengliheng.github.io/issues/32) - [笔记二](https://github.com/pengliheng/pengliheng.github.io/issues/51)

---

-   [x] [ES6 标准入门](https://book.douban.com/subject/26708954/) - [笔记一](https://github.com/pengliheng/pengliheng.github.io/issues/23) - [笔记二](https://github.com/pengliheng/pengliheng.github.io/issues/26)

---

-   [x] [高性能的 JavaScript](https://book.douban.com/subject/5362856/) - [笔记](https://github.com/pengliheng/pengliheng.github.io/issues/15)

---

-   [x] [JavaScript 语言精粹](https://book.douban.com/subject/3590768/) - [笔记](https://github.com/pengliheng/pengliheng.github.io/issues/10)

---

-   [x] [数据结构与算法 JavaScript 描述](https://book.douban.com/subject/25945449/) - [笔记](https://github.com/pengliheng/pengliheng.github.io/issues/6)
