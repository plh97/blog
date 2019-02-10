docker run \
--rm -it \
-d \
--name blog \
-p 80:3000 \
-p 81:3001 \
-v $(pwd):/root/app \
-w /root/app \
pengliheng/react:latest