FROM node



COPY . /root/app

RUN yarn global add serve

# CMD [ "nodemomn" "/root/app/server/node.js" ]


# serve -s build