FROM node:13
WORKDIR /root/app
COPY . /root/app
RUN yarn
RUN npx yarn add webpack --dev
# RUN npm run build