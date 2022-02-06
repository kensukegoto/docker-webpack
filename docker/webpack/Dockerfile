FROM node:8.15.0
WORKDIR /my_webpack
COPY webpack.config.js ./
COPY package.json ./
RUN npm install
# RUN npm install -D webpack webpack-cli babel-loader @babel/core @babel/preset-env
CMD ["npm","run","build"]
# CMD ["/bin/sh","-c", "while :; do sleep 10; done"]