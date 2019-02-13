docker run \
-d \
--rm -it \
--name blog \
-v $(pwd):/root/app \
-p 8001:80 \
-w /root/app \
blog:latest nodemon ./server/node.js