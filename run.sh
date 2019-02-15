# docker build --tag=blog:latest .




docker run \
--name blog \
-it --rm \
-v $(pwd):/go/src/www/pengliheng.github.io \
-w /go/src/www/pengliheng.github.io/server \
-p 80:3000 \
blog:latest go run main.go



