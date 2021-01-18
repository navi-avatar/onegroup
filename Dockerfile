FROM node:12.18.1
ENV NODE_ENV=production
ENV EGG_SERVER_ENV=prod

COPY . /app

WORKDIR /app

RUN npm install --registry=https://registry.npm.taobao.org --production

EXPOSE 8080

CMD npm start
