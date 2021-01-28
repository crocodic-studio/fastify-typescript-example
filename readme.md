<p
  align="center"
>
  <img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
  <img alt="TypeScript" src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white"/>
</p>

# Fastify-TypeScript-Example

## Features

This repo contains opinionated basic project folder structure of Fastify-Typescript, the main process file is [server.ts](./sources/server.ts)

and example how to basic requests with Fastify like below:

- GET Request - [Link](./sources/request-handlers/root.ts)
- GET Request With Query - [Link](./sources/request-handlers/greet-me.ts)
- POST Request (Accepts Multipart/form-data, x-www-form-urlencoded and RAW String JSON) - [Link](./sources/request-handlers/submit-my-message.ts)

## Preparation

- Clone this repository
- Run ```cd fastify-typescript-example``` then ```npm install```

## Running Localhost For Developing

- Run ```nodemon```