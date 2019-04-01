FROM node
COPY . /root/app
WORKDIR /root/app
RUN npm install serve yarn -g
RUN yarn
RUN npm rebuild node-sass
RUN ls
RUN yarn build
CMD serve -s dist