FROM node:alpine
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install -g npm@6.14.8
COPY . /app
EXPOSE 3000
CMD ["npm", "start"]