# Blog

[![Build Status](https://travis-ci.org/pengliheng/pengliheng.github.io.svg?branch=master)](https://travis-ci.org/pengliheng/pengliheng.github.io)
[![author](https://img.shields.io/badge/author-peng-blue.svg)](https://github.com/pengliheng/pengliheng.github.io)
[![Node.js Version](https://img.shields.io/badge/node.js-8.7.0-blue.svg)](http://nodejs.org/download)
![Size](https://github-size-badge.herokuapp.com/pengliheng/pengliheng.github.io.svg)


## 项目放在腾讯云

![](https://i.loli.net/2017/10/24/59eed9ac20090.png)

### 所有数据均从github获取

### 本博客不储存任何文章内容数据

### prepare to use golang to build this backend server

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