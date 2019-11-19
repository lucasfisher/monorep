from node:8 as react-build
add yarn.lock /yarn.lock
add package.json /package.json

workdir /app

copy package.json /app/package.json
run npm install

copy . /app
run npm run build

expose 80
CMD ["npm", "start"]