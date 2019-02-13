docker run \
--name blog \
-p 8001:5000 \
-w /root/app \
blog:latest serve -s build