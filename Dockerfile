FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD [ "npm" , "start" ]