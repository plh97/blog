import React from "react";
import {Row, Col} from 'antd';
import PrismCode from '../../feature/Prism.js'

export default class backendgo extends React.Component {
  render() {
    return (
      <Col span={24}>
        <h3>Create a server</h3>
        <h4>app.js</h4>
        <PrismCode lang='js'>{`
          const
            http = require('http'),
            dt = require('./package1');

          http.createServer(function (req, res) {
              res.writeHead(200, {'Content-Type': 'text/html'});
              res.write("The date and time are currently: " + dt.myDateTime());
              res.end();
          }).listen(8080);
        `}</PrismCode>
        <h4>package1.js</h4>
        <PrismCode lang='js'>{`
          exports.myDateTime = function () {
            return Date();
          };
        `}</PrismCode>
        <h4>use Pm2 to start it</h4>
        <PrismCode lang='js'>{`
          npm install pm2 -g
          //you can see it auto-change
          //no need to reload nodejs
          pm2 start app.js --watch
        `}</PrismCode>
        <h4>readFile location your default place.</h4>
        <p>i try to assume that your have lot of files such as </p>
        <PrismCode lang='js'>{`
          const
            http = require('http'),
            url = require('url'),
            fs = require('fs');

          http.createServer((req,res) => {
            var q = url.parse(req.url, true);
            var filename = `.${q.pathname}`;
            fs.readFile(filename, (err,data) => {
              if (err){
                res.writeHead(404,{'Content-Type': 'text/html'});
                return res.end("404 Not Found");
              }
              res.writeHead(200,{'Content-Type': 'text/html'});
              res.write(data);
              return res.end();
            })
          }).listen(80)
        `}</PrismCode>
        <p>let visit the url <a href="http://localhost/readme.md">README.md</a></p>

      </Col>
    )
  }
}
