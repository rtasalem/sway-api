const { server } = require('./server')
const { apolloServer } = require('./graphql')
const hapiApollo = require('@as-integrations/hapi').default

const init = async () => {
  try {
    await apolloServer.register()

    await server.register({
      options: {
        plugin: hapiApollo,
        options: {
          path: '/graphql',
          context: ({ request }) => {
            return { headers: request.headers }
          }
        }
      }
    })

    await server.start()
    console.log('Server running on %s', server.info.uri)
  } catch (error) {
    process.on('unhandledRejection', err => {
      console.log(err)
      process.exit(1)
    }

    )
  }
}

init()
