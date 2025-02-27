FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm run install

COPY . .

CMD [ "npm", "run", "dev" ]