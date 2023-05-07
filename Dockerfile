FROM node:18 as build
WORKDIR /pokedex

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build
FROM nginx:1.19
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /pokedex/build /usr/share/nginx/html