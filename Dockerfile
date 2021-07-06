FROM node:14-alpine

WORKDIR /app

COPY . .

RUN apk add postgresql
RUN yarn install && yarn build
RUN cd client && yarn install && yarn build

EXPOSE 3000

CMD yarn start
