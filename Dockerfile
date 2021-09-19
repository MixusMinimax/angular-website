### Build ###
FROM node:16.9 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY website/ website/
COPY src/ src/
COPY e2e/ e2e/
COPY .browserslistrc angular.json karma.conf.js tsconfig.app.json tsconfig.json tsconfig.spec.json tslint.json ./
RUN npm run build-prod

### Run ###
FROM nginx:1.21
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/website /usr/share/nginx/html