docker run \
--rm -it \
-d \
-p 80:3000 \
-p 81:3001 \
-e ACCESS_TOKEN='staging' \
-v $(pwd):/root/app \
-w /root/app \
pengliheng/react:latest