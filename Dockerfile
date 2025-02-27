FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm install -g npm@11.1.0

RUN npm install 

COPY . .

CMD [ "npm", "run", "dev" ]