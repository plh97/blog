import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {tomorrowNightEighties, xcode} from "react-syntax-highlighter/dist/styles";
import {Row, Col} from 'antd';

export default class Nginx extends React.Component {
  constructor() {
    super();
    this.state = {
      language: 'javascript',
      style: tomorrowNightEighties,
      showLineNumbers: true
    };
  }
  render() {
    const showLineNumbers = this.state.showLineNumbers;
    const language = this.state.language;
    const style = this.state.style;
    return (
      <Col span={24}>
        <h3>我的Nginx 配置</h3>
        <h4>say nothing just read my code.</h4>
        <ul>
          <li>here's 5 reasons i suggest you to use nginx!</li>
          <li>1. Gzip ,can really make your js code files more smaller.only 30% volume after Gzip. </li>
          <li>2. you can config more than 2 domain with different content.</li>
          <li>3. can config your https in a easy way.</li>
          <li>4. also can config your cache with nginx.</li>
          <li>
            5. if your usse the front router to swithc pages.
            you can focus the websites no matter load which Subroutine just load the index.html file,
            while your refresh your page your can got true Subroutine.
          </li>
        </ul>
        <SyntaxHighlighter showLineNumbers={showLineNumbers} language={language} style={style}>{
`http {
  //http://*.pipk.top -----> https://*.pipk.top  -----> http://112.74.63.84:8080
  //                                              |---> http://112.74.63.84:8001
  include                    mime.types;
  default_type               application/octet-stream;
  sendfile                   on;
  keepalive_timeout          65;
  gzip                       on;      //用于开启Gzip压缩，至少可以将文件压缩至1/3，极大加快首次加载速度
  gzip_disable               "msie6";
  gzip_vary                  on;
  gzip_proxied               any;
  gzip_comp_level            6;       //压缩比率，1~9，数值越大，压缩体积越小，服务器消耗事件越长
  gzip_buffers               16 8k;
  gzip_http_version          1.1;     //http1.1  可选http1.0   .. 根据你的个人要求来设置
  gzip_min_length            256;
  gzip_types                 text/css application/x-javascript application/javascript text/javascript;
  //https配置
  server {
    listen                   443 ssl;
    //所适配的域名， 如果域名为以下，则应用如下配置
    //you can use your cmd to test your https whether work ...  eg:..
    // curl -I https://pipk.top
    // Server: nginx/1.13.6
    // Date: Fri, 27 Oct 2017 20:23:47 GMT
    // Content-Type: text/html; charset=utf-8
    // Content-Length: 19429
    // Connection: keep-alive
    // Vary: Accept-Encoding
    // Last-Modified: Fri, 27 Oct 2017 11:57:59 GMT
    // Cache-Control: max-age=30758
    server_name              pipk.top ww.pipk.top blog.pipk.top;
    //建议使用 https://certbot.eff.org
    //傻瓜式自动生成，免费证书，并且可选择多个子域名同时应用该证书，具体可以去他的官网看一下
    ssl_certificate          /etc/letsencrypt/live/pipk.top/fullchain.pem; # managed by Certbot
    ssl_certificate_key      /etc/letsencrypt/live/pipk.top/privkey.pem; # managed by Certbot
    include                  /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam              /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
    ////////////////////////////////////////////all above is certbot auto create///////////////////////////
    ssl_session_cache         shared:SSL:1m;
    //i use the reverse proxy to both 8001 and 8080 prot such as this below
    //so that you can just easy creat http with 8001 port and use nginx's feature reverse proxy
    location / {
      proxy_pass              http://127.0.0.1:8001;
      proxy_http_version      1.1;
      proxy_set_header        Upgrade $http_upgrade;
      proxy_set_header        Connection "upgrade";
      proxy_set_header        Host $host;
    }
  }
  //all the same as above config just with chat.pipk.top => 8080 prot
  // note ::::
  // i suggest not to use if or if...else...,it may cause a bug that your all got a 403 page
  // want to know more your can read https://nginx.org/en/docs/http/converting_rewrite_rules.html
  //to learn the difficult rules
  server {
    listen                   443 ssl;
    server_name              chat.pipk.top;
    ssl_certificate          /etc/letsencrypt/live/pipk.top/fullchain.pem; # managed by Certbot
    ssl_certificate_key      /etc/letsencrypt/live/pipk.top/privkey.pem; # managed by Certbot
    include                  /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam              /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
    ssl_session_cache         shared:SSL:1m;
    location / {
      proxy_pass              http://127.0.0.1:8080;
      proxy_http_version      1.1;
      proxy_set_header        Upgrade $http_upgrade;
      proxy_set_header        Connection "upgrade";
      proxy_set_header        Host $host;
    }
  }
  //this can rewrite http ==> https   with all the domain like this www.pipk.top pipk.top blog.pipk.top .....
  server {
    listen                    80;
    server_name               *.pipk.top;
    rewrite                   ^(.*)$ https://$host$1 permanent;
  }
}`
        }</SyntaxHighlighter>
      </Col>
    )
  }
}
