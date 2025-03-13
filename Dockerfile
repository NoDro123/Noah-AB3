FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm install 

COPY . .

RUN npm run lint && npm run test && npm run build

CMD [ "npm", "run", "start" ]