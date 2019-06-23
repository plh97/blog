FROM node
COPY . /root/app
WORKDIR /root/app
RUN npm install serve -g
# RUN yarn
# RUN npm rebuild node-sass
# RUN ls
# RUN npm run build
CMD serve -s dist