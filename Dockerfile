FROM node:latest
ARG LOAN_VERSION=1

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY dist /usr/src/app
RUN npm install -g http-server

ENV LOAN_VERSION ${LOAN_VERSION}

CMD [ "npm", "start"]
