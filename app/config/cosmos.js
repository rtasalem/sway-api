const Joi = require('joi')

const schema = Joi.object({
  endpoint: Joi.string(),
  key: Joi.string(),
  usersDatabase: Joi.string().default('users-database'),
  usersContainer: Joi.string().default('users-container'),
  postsDatabase: Joi.string().default('posts-database'),
  postsContainer: Joi.string().default('posts-container')
})

const config = {
  endpoint: process.env.COSMOS_ENDPOINT,
  key: process.env.COSMOS_KEY
}

const { error, value } = schema.validate(config, { abortEarly: false })

if (error) {
  throw new Error(`The cosmos config is invalid. ${error.message}`)
}

module.exports = value
