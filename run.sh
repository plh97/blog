docker build -t blog . &
docker run \
--rm -it \
--name blog \
-p 8001:5000 \
-v $(pwd):/root/app \
-w /root/app \
blog:latest \
yarn build & serve -s dist