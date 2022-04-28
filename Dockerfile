FROM node:14-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
ENV NODE_OPTIONS="--max_old_space_size=8192"
RUN npm install
COPY . /app
RUN npm run build
RUN npx browserslist@latest --update-db

FROM nginx:1.19-alpine AS server
# COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-step /app /usr/share/nginx/html
EXPOSE 3000
CMD ["npm", "start"]