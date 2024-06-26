const typeDefs = `#graphql

type Query {
  searchUserProfile(email: String, username: String): UserProfile
  searchPostById(id: String!): Post
  searchPostsByUsername(username: String!): [Post]  
}

type Mutation {
  createUserProfile(email: String!, username: String!, password: String!, firstName: String!, lastName: String!, pronouns: String, bio: String): UserProfile
  updateUserProfile(id: String!, email: String, username: String, firstName: String, lastName: String, pronouns: String, bio: String): UserProfile
  deleteUserProfile(id: String!): UserProfile
  createPost(username: String!, content: String!): 
  updatePost(id: String!, content: String): Post
  deletePost(id: String!): Post
}

type UserProfile {
  id: String
  email: String
  username: String
  password: String
  firstName: String
  lastName: String
  pronouns: String
  bio: String
  posts: Int
  followers: Int
  following: Int
}

type Post {
  id: String
  username: String
  content: String
  likes: Int
  timestamp: String
}
`

module.exports = { typeDefs }
