FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Give execute permissions to mocha binary
RUN chmod +x ./node_modules/.bin/mocha

EXPOSE 8080

CMD ["node", "server.js"]
