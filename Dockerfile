FROM node:10.7

WORKDIR /usr/src

COPY package.json /usr/src/package.json
RUN yarn install

COPY . /usr/src/
RUN yarn build

# app
EXPOSE 3000 

# app hmr
EXPOSE 3001

# api
EXPOSE 4000

CMD ["yarn", "start"]