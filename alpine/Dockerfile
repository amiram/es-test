FROM mhart/alpine-node:8.9.4

WORKDIR /usr/src/app

COPY package.json .

RUN npm i

COPY index.js .

CMD ["node", "index.js"]
