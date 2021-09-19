### Build ###
FROM node:16.9 AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build-prod

### Run ###
FROM nginx:1.21
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/website /usr/share/nginx/html