FROM node:10.7

WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
RUN yarn install

COPY . /usr/src/app/
RUN yarn build

# app
EXPOSE 3000 

# app hmr
EXPOSE 3001

# api
EXPOSE 4000

CMD ["yarn", "start"]