FROM node:14-alpine As builder

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]