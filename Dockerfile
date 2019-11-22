# builder
FROM node:12.12.0-stretch as builder

# show versions
RUN node --version && npm --version && yarn --version

# install gulp
RUN npm i gulp-cli -g

# run yarn for prerequisits
RUN yarn

# run gulp to build app
RUN gulp


# build docker container
FROM nginx:1.17.6-alpine as meshviewer
COPY --from=builder /drone/src/build /usr/share/nginx/html/
