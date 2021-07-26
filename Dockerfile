FROM node:14
WORKDIR /usr/src/app
RUN pwd
RUN npm install
RUN npm build
ENTRYPOINT npm run start




