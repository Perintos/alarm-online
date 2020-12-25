FROM node:13.12.0-alpine as react-build

WORKDIR /app

COPY . /app

EXPOSE 3000

RUN npm install 
# RUN npm run-script build
RUN npm run build
RUN npm run start

