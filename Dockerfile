### Build ###
FROM node:16.10 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY website/ website/
COPY e2e/ e2e/
COPY .browserslistrc angular.json karma.conf.js tsconfig.app.json tsconfig.json tsconfig.spec.json tslint.json ./
COPY src/ src/
RUN npm run build-prod

### Run ###
FROM nginx:1.21
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/website /usr/share/nginx/html