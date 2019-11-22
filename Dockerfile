# builder
FROM node:12.12.0-stretch as builder
COPY . /mesh
WORKDIR /mesh

# show versions
RUN node --version && npm --version && yarn --version

# install gulp
RUN npm i gulp-cli

# run yarn for prerequisits
RUN ls -alh
RUN yarn

# run gulp to build app
RUN gulp

# build docker container
FROM nginx:1.17.6-alpine as meshviewer
COPY --from=builder /mesh/build /usr/share/nginx/html/
