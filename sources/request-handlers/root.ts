// GET Method

import { FastifyReply, FastifyRequest } from 'fastify'

export function root(request: FastifyRequest, reply: FastifyReply) {
  reply
  .code(200)
  .header('Content-Type', 'application/json; charset=utf-8')
  .send({'message': 'Hello World!'})
}