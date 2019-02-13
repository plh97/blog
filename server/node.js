const http = require('http');
const fs = require('fs');
const mine =  require("./mine.json");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.end(fs.readFileSync('/root/app/dist/index.html','utf-8'))
  } else {
    fs.readFile(`/root/app/dist${req.url}`, 'utf-8',(err,data)=>{
      if(err) {
        res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
        res.end({
          code:"-1",
          message: 'error'
        })
      } else {
        const fileType = req.url.match(/(?<=\.)\w+$/)[0];
        console.log(fileType);
        console.log(mine);
        res.setHeader('Content-Type', `${mine[fileType]}; charset=UTF-8`);
        res.end(data);
        // console.log(data);
      }
    })
  }

});

server.listen("80")