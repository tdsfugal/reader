FROM node:latest

WORKDIR /server

COPY package.json .

RUN yarn install

COPY src/ src/

EXPOSE 4000

CMD ["node", "/server/src/index.js"]
