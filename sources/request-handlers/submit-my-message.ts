// POST Method With Param

import { FastifyReply, FastifyRequest } from 'fastify'

import getParams from '../helpers/get-params'

type ParamsType = {
  message: string
}

export function submitMyMessage(request: FastifyRequest, reply: FastifyReply) {
  let params = getParams(request) as ParamsType

  reply
  .code(200)
  .header('Content-Type', 'application/json; charset=utf-8')
  .send({'message': `Your message is "${params.message}"`})
}