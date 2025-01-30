FROM ubuntu:latest

RUN apt-get update && apt-get install -y curl

RUN curl -sL https://deb.nodesource.com/setup_22.x | bash -

RUN apt-get upgrade -y

RUN apt-get install -y nodejs

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY server.js server.js  
#  or can COPY . .   that copy the entire files from the directiry


ENTRYPOINT [ "node", "server.js" ]