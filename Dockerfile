FROM node:latest
COPY . /go/src/www/pengliheng.github.com
WORKDIR /go/src/www/pengliheng.github.com
RUN npm install serve yarn -g
RUN yarn
RUN yarn build
CMD serve -s dist