FROM node:14
MAINTAINER rg.oh@searchpert.com

# move work directory
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

# install packages
RUN npm i

# copy everything else
COPY . .

# port 3000
EXPOSE 3000

# default run
CMD ["npm", "start"]