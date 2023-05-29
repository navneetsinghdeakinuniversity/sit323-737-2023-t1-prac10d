FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm install -g mocha
RUN chmod +x /usr/local/bin/mocha


EXPOSE 8080

CMD ["node", "server.js"]
