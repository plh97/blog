FROM node:latest
COPY . /go/src/www/pengliheng.github.com
WORKDIR /go/src/www/pengliheng.github.com
RUN npm install serve yarn -g
RUN yarn
RUN npm rebuild node-sass
CMD ['yarn build','serve -s dist']