FROM node:12-alpine

EXPOSE 80
ENV ENV=production

WORKDIR /src
COPY package*.json ./
COPY . .

RUN npm i
COPY . .


CMD ["pm2-runtime", "./dist/index.js"]

# RUN chmod +x scripts/deploy_aws_ecs.sh
# CMD ["bash", "-c", "scripts/deploy_aws_ecs.sh"]
# CMD ["npm start", "dist/index.js"]
# docker build -t api-service .
# docker run -it -p 80:80 api-service
