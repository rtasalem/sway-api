const typeDefs = `#graphql

type Query {

}

type Mutation {

}

type UserProfile {
  id: String
  email: String
  username: String
  firstName: String
  lastName: String
  bio: String
  posts: [Post]
  followers: Int
  following: Int
}

type Post {
  id: String
  content: String
  likes: Int
  _ts: String
}
`

module.exports = { typeDefs }
