[![Build Status](https://travis-ci.org/pengliheng/pengliheng.github.io.svg?branch=master)](https://travis-ci.org/pengliheng/pengliheng.github.io)
[![author](https://img.shields.io/badge/author-peng-blue.svg)](https://github.com/pengliheng/pengliheng.github.io)
[![Node.js Version](https://img.shields.io/badge/node.js-8.7.0-blue.svg)](http://nodejs.org/download)
![Size](https://github-size-badge.herokuapp.com/pengliheng/pengliheng.github.io.svg)


## 欢迎光临我的博客


### 本站托管于Github，所有数据来源于Github，通过动态加载数据渲染页面

### 发展方向
- Graphql API
- React + next.js 从服务器端渲染页面
- Github Issue Page - server less
- GoLang 搭建后端
- ~~Vue搭建前端页面~~
- [√] 代码片段Gist
- 分析Github相关数据

### 特性
- [x] 博客
- [x] 仓库集合
- [x] 计划任务TODO
- [x] 响应式
- [x] 数据持久化
- [x] 按需加载
- [x] 静态类型检查

### 技术栈
- React
- Graphql
- Ant-Design
- Github Api

### 贡献代码

```bash
git clone https://github.com/pengliheng/pengliheng.github.io.git
cd ./blog
yarn            # 安装依赖
yarn run w      # 监听10086端口
yarn run nodemon      # 监听10086端口
```
**Welcome PR 😀**


```go
package main

import (
    "fmt"
    "github.com/julienschmidt/httprouter"
    "net/http"
    "log"
)

func main() {
	router := httprouter.New()
	router.ServeFiles("/*filepath", http.Dir("dist"))
    log.Fatal(http.ListenAndServe(":80", router))
}
```

### Go 语言关键字只有25个 ，比英文字母还少一个，是不是很简单
```go
break    default      func    interface    select
case     defer        go      map          struct
chan     else         goto    package      switch
const    fallthrough  if      range        type
continue for          import  return       var
```

### type 关键字
- 一字千面，一个type 可以担当多个角色

### interface 关键字
- 千面一字，多个interface担当一个角色

### Well, in simple terms, I just think golang is designed to be a scientific computer language