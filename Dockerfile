# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app/alarm-online

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# Exposer PORT 3000 sur notre machine virtuelle afin que nous puissions exécuter notre serveur
EXPOSE 3000 

# add app
COPY . ./

# start app
CMD ["npm", "start"]

