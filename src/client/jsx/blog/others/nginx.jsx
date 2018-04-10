import React from 'react';
import PrismCode from '../../feature/Prism.js';


const Nginx = () => (
  <div>
    <h3>我的Nginx 配置</h3>
    <h4>say nothing just read my code.</h4>
    <ol start="1">
      <li>here's 5 reasons i suggest you to use nginx!</li>
      <li>1. Gzip ,can really make your js code files more smaller.only 30% size after Gzip. </li>
      <li>2. you can config more than 2 domain with different content.</li>
      <li>3. can config your https in a easy way.</li>
      <li>4. also can config your cache with nginx.</li>
      <li>5. if your usse the front router to swithc pages.
        you can focus the websites no matter load which Subroutine just load the index.html file,
        while your refresh your page your can got true Subroutine.
      </li>
    </ol>
    <PrismCode lang="nginx" >{`
http {
  include                    mime.types;
  default_type               application/octet-stream;
  sendfile                   on;
  keepalive_timeout          65;
  gzip                       on;      
  gzip_disable               "msie6";
  gzip_vary                  on;
  gzip_proxied               any;
  gzip_comp_level            6;       
  gzip_buffers               16 8k;
  gzip_http_version          1.1;     
  gzip_min_length            256;
  gzip_types                 text/css application/x-javascript application/javascript text/javascript;
  # https配置
  server {
    listen                   443 ssl;
    server_name              pipk.top www.pipk.top blog.pipk.top;

    ssl_certificate          /etc/letsencrypt/live/pipk.top/fullchain.pem; # managed by Certbot
    ssl_
    certificate_key      /etc/letsencrypt/live/pipk.top/privkey.pem; # managed by Certbot
    include                  /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam              /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

    ssl_session_cache         shared:SSL:1m;
    location / {
      proxy_pass              http://127.0.0.1:8001;
      proxy_http_version      1.1;
      proxy_set_header        Upgrade $http_upgrade;
      proxy_set_header        Connection "upgrade";
      proxy_set_header        Host $host;
    }
  }
    include                  /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam              /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
    ssl_session_cache         shared:SSL:1m;
    location / {
      proxy_pass              http://127.0.0.1:8002;
      proxy_http_version      1.1;
      proxy_set_header        Upgrade $http_upgrade;
      proxy_set_header        Connection "upgrade";
      proxy_set_header        Host $host;
    }
  }

  server {
    listen                    80;
    server_name               *.pipk.top;
    rewrite                   ^(.*)$ https://$host$1 permanent;
  }
}
      `}
    </PrismCode>
  </div>
);
export default Nginx;
