FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm install 

RUN npm run lint && npm run test && npm run build

COPY . .

CMD [ "npm", "run", "start" ]