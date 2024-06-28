const {
  createUserProfile
} = require('../mutations')

const resolvers = {
  Mutation: {
    createUserProfile
  }
}

module.exports = { resolvers }
