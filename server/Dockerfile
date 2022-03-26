FROM node:17-alpine

RUN npm i --g nodemon

COPY package.json .

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4000

CMD ["npm", "run", "start"]

