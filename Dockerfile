FROM node


# COPY . /root/app

RUN npm install nodemon -g

# CMD [ "nodemomn" "/root/app/server/node.js" ]