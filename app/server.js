'use strict'
const Hapi = require('@hapi/hapi')

const init = async () => {
  try {
    const server = Hapi.server({
      port: 3100, // replace with env port
      host: '0.0.0.0'
    })

    await server.start()
    console.log('Server running on %s', server.info.uri)

  } catch (error) {
    console.error('Unable to start server:', error)
    process.exit(1)
  }
  process.on('unhandledRejection', (err) => {
    console.log(err)
    process.exit(1)
  })

  module.exports = { server }