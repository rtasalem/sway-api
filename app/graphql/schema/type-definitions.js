const typeDefs = `#graphql

type Query {
  searchUserProfile(username: String!): UserProfile
  searchPostsByUsername(username: String!): [Post]  
}

type Mutation {
  createUserProfile(email: String!, username: String!, password: String!, firstName: String!, lastName: String!, pronouns: String, bio: String): MutateUserProfile
  updateUserProfile(id: String!, email: String, username: String, password: String, firstName: String, lastName: String, pronouns: String, bio: String): MutateUserProfile
  deleteUserProfile(id: String!): MutateUserProfile
  createPost(username: String!, content: String!): MutatePost
  updatePost(id: String!, content: String): MutatePost
  deletePost(id: String!): MutatePost
  updateNotificationPreferences(username: String!, email: Boolean, push: Boolean): MutateNotificationPreferences
}

type Status {
  code: Int
  success: Boolean
  message: String
}

type NotificationPreferences {
  email: Boolean
  push: Boolean
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
  posts: [Post]
  followers: Int
  following: Int
  notificationPreferences: NotificationPreferences
  createdAt: String
}

type Post {
  id: String
  username: String
  content: String
  likes: Int
  timestamp: String
}

type MutateNotificationPreferences{
  status: Status
  notificationPreferences: NotificationPreferences
}

type MutateUserProfile {
  status: Status
  userProfile: UserProfile
}

type MutatePost {
  status: Status
  post: Post
}
`

module.exports = { typeDefs }
