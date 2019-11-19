FROM node:8 as react-build
ADD yarn.lock /yarn.lock
ADD package.json /package.json

WORKDIR /app

COPY package.json /app/package.json
RUN npm install

COPY . /app
RUN npm run build

FROM node:8

# Here we only need to copy over public once the docker image is built. this makes the image a little bit smaller
COPY --from=react-build /app/public /app/public
COPY --from=react-build /app/package.json /app/package.json
WORKDIR /app

EXPOSE 80
CMD ["npm", "start"]