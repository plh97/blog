### Http Method

> -   GET https://mysite.com/api/users
> -   GET https://mysite.com/api/users/1 or https://mysite.com/api/users/details/1
> -   POST https://mysite.com/api/users
> -   PUT https://mysite.com/api/users/1 or https://mysite.com/api/users/update/1
> -   DELETE https://mysite.com/api/users/1 or https://mysite.com/api/users/delete/1

### Routes

页面 URL 路由也应该以 restful 风格交互.

```bash
# corriently
https://app.pipk.top/article/1
# wrong
https://app.pipk.top/article?id=1
```

前端特有的嵌套路`URL`由同样以`Restful`风格命名
