FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/website /usr/share/nginx/html