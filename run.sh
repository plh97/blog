docker run \
--name blog \
# -v $(pwd):/root/app \
-p 8001:80 \
-w /root/app \
blog:latest node ./server/node.js