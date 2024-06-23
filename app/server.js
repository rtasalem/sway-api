'use strict'
const Hapi = require('@hapi/hapi')

const server = Hapi.server({
  port: 3100,
  host: '0.0.0.0'
})

const routes = [].concat(
  require('./routes/healthy'),
  require('./routes/healthz')
)

server.route(routes)

module.exports = { server }