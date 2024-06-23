const { server } = require('./server')

const init = async () => {
  await server.register({
    options: {
      path: '/graphql',
      context: ({ request }) => {
        return { headers: request.headers }
      }
    }
  })

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', err => {
  console.log(err)
  process.exit(1)
})

init()
