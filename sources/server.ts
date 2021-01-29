import Fastify from 'fastify'
import FastifyMultipart from 'fastify-multipart'
import FastifyFormBody from 'fastify-formbody'

import { root, greetMe, submitMyMessage } from './request-handlers'

const server = Fastify()

server.register(FastifyMultipart, { attachFieldsToBody: true })
server.register(FastifyFormBody)

server.get('/', root)
server.get('/greet-me', greetMe)
server.post('/submit-my-message', submitMyMessage)

const PORT = process.env.PORT || 7001
const BIND_IP_ADDRESS = '0.0.0.0'

server.listen(PORT, BIND_IP_ADDRESS, (error, address) => {
  if (error) {
    console.error(error)
    process.exit(1)
  }
  
  console.log(`Server listening at ${address}`)
})
