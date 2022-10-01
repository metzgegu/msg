FROM node:16.15.1-buster-slim

WORKDIR /application

COPY package.json yarn.lock ./

RUN yarn install

# Start server
CMD ["yarn", "dev"]