docker run \
--rm -it \
--name blog \
-v $(pwd):/root/app \
-p 8001:80 \
-w /root/app \
pengliheng/blog:latest nodemon ./server/node.js