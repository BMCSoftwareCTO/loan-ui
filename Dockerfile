FROM node:latest

# galapagos-dev@bmc.com
MAINTAINER _2c4d9d@bmc.com

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY dist /usr/src/app
RUN npm install -g http-server

CMD [ "npm", "start"]
