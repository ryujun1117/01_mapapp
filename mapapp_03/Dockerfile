FROM node:alpine

WORKDIR /usr/app

COPY ./src ./

RUN npm install

RUN npm install -g create-react-app

RUN create-react-app react-test

CMD ["sh", "./entrypoint.sh"]
