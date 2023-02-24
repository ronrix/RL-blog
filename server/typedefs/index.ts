// The GraphQL schema
export default `#graphql
  scalar GraphQLDateTime

  type UserType {
    id: ID!
    username: String!
    email: String!
    password: String!
    avatar: String!
    description: String!
    followers: [String!]
    links: [String!]
    bookmarks: [String!]
    createdAt: GraphQLDateTime
    updatedAt: GraphQLDateTime
  }

  type BlogType {
    id: ID!
    user_id: ID!
    content: String!
    category: String!
    read_duration: String
    createdAt: GraphQLDateTime
    updatedAt: GraphQLDateTime
  }

  type Response {
    msg: String!
    status: Int!
  }

  type Query {
    hello: String
    world: String
    user(id: ID!): UserType
    getUserBlogs: [BlogType]
    login(username: String!, email: String!, uid: String!): UserType
    logout(id: ID!): Response
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, avatar: String!, description: String!, followers: [String!], links: [String!], bookmarks: [String!]): UserType
    completeProfile(id: ID!, followers: [String!], links: [String!], bookmarks: [String!]): UserType
    createBlog(user_id: ID!, content: String!, category: String!, read_duration: String!): BlogType
  }
`;