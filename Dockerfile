FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN chmod +x ./node_modules/mocha/bin/mocha

EXPOSE 8080

CMD ["node", "server.js"]
