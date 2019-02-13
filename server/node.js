const http = require('http');
const fs = require('fs');
const mine =  require("./mine.json");

// 静态资源加载模块
http.createServer((req, res) => {
  const fileType = req.url.match(/(?<=\.)\w+$/g);
  if (!fileType) {
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.end(fs.readFileSync('/root/app/build/index.html','utf-8'))
  } else {
    fs.readFile(`/root/app/build${req.url}`, (err, data) => {
      if(err) {
        res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
        res.end({
          code:"-1",
          message: 'error'
        })
      } else {
        mine[fileType]  && res.setHeader('Content-Type', `${mine[fileType]}`);
        res.end(data);
      }
    })
  }
}).listen("80")