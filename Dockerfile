FROM node:12-alpine

#create app directory
WORKDIR /app
COPY . /app/

#node library setting
RUN rm package-lock.json
RUN npm install --production

#network setting
ENV HOST 0.0.0.0
EXPOSE 8080

#start command
CMD ["npm", "start"]