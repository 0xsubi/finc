FROM nginx:alpine

#!/bin/sh

COPY ./nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY public/ /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]