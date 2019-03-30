FROM node:latest
COPY . /go/src/www/pengliheng.github.com
WORKDIR /go/src/www/pengliheng.github.com
RUN npm install serve yarn -g
RUN yarn
RUN npm rebuild node-sass
RUN yarn build
CMD serve -s dist