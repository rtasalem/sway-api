const { cosmos } = require('../../cosmos')
const { cosmosConfig } = require('../../config')
const { generateTimestamp } = require('../../utils')

const createUserProfile = async (_root, args, context) => {
  const { usersDatabase } = await cosmos()

  const item = {
    email: args.email,
    username: args.username,
    password: args.password,
    firstName: args.firstName,
    lastName: args.lastName,
    pronouns: args.pronouns,
    bio: args.bio,
    posts: [],
    followers: 0,
    following: 0,
    notificationPreferences: {
      email: args.email,
      push: args.push
    },
    createdAt: generateTimestamp()
  }

  const response = await usersDatabase
    .container(cosmosConfig.usersContainer)
    .items.create(item)

  return {
    status: {
      code: response.statusCode,
      status: response.statusCode >= 200 && response.statusCode < 300,
      message: response.statusCode >= 200 && response.statusCode < 300 ? 'Sway user profile successfully created' : response.messages[0].message
    },
    userProfile: {
      ...response.resource
    }
  }
}

module.exports = { createUserProfile }
