// GET Method With Query

import { FastifyReply, FastifyRequest } from 'fastify'

import getParams from '../helpers/get-params'

type ParamsType = {
  name: string
}

export function greetMe(request: FastifyRequest, reply: FastifyReply) {
  const params = getParams(request) as ParamsType

  reply
  .code(200)
  .header('Content-Type', 'application/json; charset=utf-8')
  .send({'message': `Hello ${params.name}, nice to see you!`})
}