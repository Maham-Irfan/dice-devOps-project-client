FROM node:alpine3.18
COPY . .
RUN npm install
EXPOSE 3000
ENTRYPOINT ["npm","run","dev"]