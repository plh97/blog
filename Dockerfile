FROM node
COPY . /root/app
WORKDIR /root/app
VOLUME [ "/root/data" ]
RUN npm install serve yarn -g
RUN yarn
RUN npm rebuild node-sass
# CMD serve -s dist