docker run \
--rm -it \
-d \
-p 80:3000 \
-v $(pwd):/root/app \
-w /root/app \
pengliheng/react:latest