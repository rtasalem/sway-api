const { usersDatabase } = require('./databases/users')
const { postsDatabase } = require('./databases/posts')

const cosmos = async () => {
  cosmos.users = await usersDatabase()
  cosmos.posts = await postsDatabase()
  return cosmos
}

module.exports = cosmos
