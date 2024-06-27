const cosmosClient = require('../client')
const { cosmosConfig } = require('../../config')

const postsDatabase = async () => {
  try {
    const { database } = await cosmosClient.databases.createIfNotExists({
      id: cosmosConfig.postsDatabase,
      throughput: 400
    })
    await database.containers.createIfNotExists({
      id: cosmosConfig.postsContainer,
      partitionKey: { paths: ['/id'] }
    })

    return database
  } catch (err) {
    throw new Error(`Failed to create applications database: ${err.message}`)
  }
}

module.exports = { postsDatabase }
