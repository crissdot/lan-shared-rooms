FROM node:18-alpine

WORKDIR /backend

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 80

CMD ["npm", "run", "serve"]