import { FastifyRequest } from 'fastify'

export default function(request: FastifyRequest) {
  let params = {}
  
  if(request.method == 'GET') {
    params = request.query
  } else if(request.method == 'POST') {
    if(request.isMultipart()) {
      // Multipart/form-data

      let formattedParams = {}

      Object.keys(request.body).map(key => formattedParams[key] = request.body[key]['value'])

      params = formattedParams
    } else {
      if(typeof request.body == 'object') {
        // x-www-form-urlencoded
        
        params = request.body
      } else if(typeof request.body == 'string') {
        // RAW Data

        params = JSON.parse(request.body)
      }
    }
  }

  return params
}