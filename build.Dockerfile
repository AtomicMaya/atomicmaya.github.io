FROM node:16.17-bullseye

WORKDIR /code

COPY ./package.json ./package-lock.json /code/

RUN npm install --legacy-peer-deps

COPY ./e2e /code/e2e
COPY ./angular.json ./.browserslistrc ./.eslintrc.json ./_config.yml ./karma.conf.js ./prerender.ts ./server.ts ./static.paths.ts ./static.paths.txt ./tsconfig.app.json ./tsconfig.json ./tsconfig.server.json ./tsconfig.spec.json ./tslint.json /code/
COPY ./src /code/src
# ADD ./dist /code/dist

RUN npm run prerender

RUN find /code/dist/atomicmayame/browser -type d -wholename "*/browser/202*" -exec rm -r {} +
